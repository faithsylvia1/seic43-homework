
const state = {
  nextPage: 1,
  lastPageReached: false,
};

const searchFlickr = function (keywords) {
  if (state.lastPageReached) {
    console.log ('stop ')
    return; //Bail out of function, we've reached last page
  }

  console.log('Searching for', keywords);
  console.log(`the page is ${state.nextPage}`);

  state.requestInProgress = true;

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; //JSONP

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', //not to be confused with HTTP methods like GET/POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: state.nextPage++
  }).done(showImages).done(function(info){
    console.log(info);
    if (info.photos.page >= info.photos.pages){
      state.lastPageReached = true;
    }
  }); // could use .ajax but this is clearer!
};

const showImages = function (results) {

  _(results.photos.photo).each(function(photo){
    //generate a URL from photo object
    const thumbnailURL = generateURL(photo);
    //display the image at that URL
    const $img = $('<img>',{src: thumbnailURL, alt: photo.title}); //can do that thing in curlies to set attr only when creating
    $img.appendTo('#images');
  });
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' //change 'q' to something else for diff sizes (see docs)
  ].join('');
};

$(document).ready(function () {
  let page;
  $('#search').on('submit', function () {
    event.preventDefault(); //disable the form being submitted to the server.

    //remove images from previous searchTerms
    $('#images').empty();
    state.nextPage = 1;
    state.lastPageReached = false;
    //get the search terms
    const searchTerms = $('#query').val();
    searchFlickr(searchTerms, page);
  })

  const chillSearchFlickr = _.debounce(searchFlickr, 1000, true)// true means it runs first request then chills as opposed to waiting until it chills to make the request. KEEP THIS OUTSIDE THE SCROLL FUNCTION because otherwise the function is called every time you scroll or are at the bottom of the page. It needs to sit outside of that so it doesn't reset the timer each time.
  $(window).on('scroll', function () {
    //calculate scroll bottom
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();

    if (scrollBottom < 400){
      const searchTerms = $('#query').val();
      chillSearchFlickr(searchTerms);
    }
  });
});
