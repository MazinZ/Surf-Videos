const YTsearch = () => {

  let apiKey = ''
  let url = ''

  return {
    init,
    search,
    url
  }

  function init(key) {
    apiKey = key
    url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video`
  }

  function search(opts) {
    const query = Object.keys(opts)
      .reduce((prev, curr) => {
        return prev + "&" + curr + "=" + opts[curr]
    }, "")

    return fetch(url + query).then(data => {
      return data.json()
    })
  }

}

module.exports.YTsearch = YTsearch