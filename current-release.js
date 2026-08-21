(function () {
  var url =
    'https://raw.githubusercontent.com/kamanager2012/dsh-community/main/docs/current-release.json'
  fetch(url)
    .then(function (res) {
      if (!res.ok) throw new Error(String(res.status))
      return res.json()
    })
    .then(function (facts) {
      var latest = facts.communityProduct && facts.communityProduct.githubLatestTag
      var kernel = facts.officialKernel && facts.officialKernel.version
      document.querySelectorAll('[data-release]').forEach(function (el) {
        var key = el.getAttribute('data-release')
        if (key === 'latestTag' && latest) el.textContent = latest
        if (key === 'kernel' && kernel) el.textContent = kernel
      })
    })
    .catch(function () {})
})()
