(function () {
  function getDocsifyConfig() {
    const alias = {
      '.*?/zh-cn/_sidebar.md': '/zh-cn/_sidebar.md',
      '.*?/zh-cn/.*/_sidebar.md': '/zh-cn/_sidebar.md',
      '.*?/zh-cn/README': '//js-sdsl.github.io/js-sdsl/README.zh-CN.md',
      '.*?/zh-cn/test/benchmark-analyze': '//js-sdsl.github.io/benchmark/resultAnalyze.zh-CN.md',
      '.*?/_navbar.md': '/_navbar.md',
      '.*?/_sidebar.md': '/_sidebar.md',
      '.*?/README': '//js-sdsl.github.io/js-sdsl/README.md',
      '.*?/changelog': '//cdn.jsdelivr.net/npm/js-sdsl/CHANGELOG.md',
      '.*?/test/benchmark-result': '//js-sdsl.github.io/benchmark/README.md',
      '.*?/test/performance-test': '//js-sdsl.github.io/js-sdsl/performance.md',
      '.*?/test/benchmark-analyze': '//js-sdsl.github.io/benchmark/resultAnalyze.md'
    }
    const editOnGithubWhiteList = Object.values(alias);
    return {
      name: 'Js-sdsl',
      nameLink: {
        '/zh-cn/': '#/zh-cn/',
        '/': '#/',
      },
      maxLevel: 4,
      subMaxLevel: 2,
      auto2top: true,
      loadNavbar: true,
      autoHeader: true,
      mergeNavbar: true,
      loadSidebar: true,
      notFoundPage: {
        '/zh-cn': '/zh-cn/README',
        '/': '/README'
      },
      coverpage: ['/zh-cn/', '/'],
      logo: '/assets/logo-small.png',
      count: {
        countable: true,
        fontsize: '1em',
        color: 'rgb(90, 90, 90)'
      },
      pagination: {
        previousText: {
          '/zh-cn/': '上一章节',
          '/': 'Pre',
        },
        nextText: {
          '/zh-cn/': '下一章节',
          '/': 'Next',
        },
        crossChapter: true,
        crossChapterText: true,
      },
      copyCode: {
        buttonText: {
          '/zh-cn/': '复制',
          '/'      : 'Copy'
        },
        errorText: {
          '/zh-cn/': '复制失败',
          '/'      : 'Error'
        },
        successText: {
          '/zh-cn/': '复制成功',
          '/'      : 'Copied'
        }
      },
      alias,
      plugins: [
        EditOnGithubPlugin.create(
          'https://github.com/js-sdsl/js-sdsl.github.io/blob/main/',
          null,
          function (file) {
            if (editOnGithubWhiteList.some(function (str) {
              return str.indexOf(file) >= 0;
            })) {
              return '';
            } else if (file.indexOf('zh-cn') >= 0) {
              return '在 GitHub 上编辑此页';
            } else {
              return 'Edit on GitHub';
            }
          })
      ],
      search: {
        paths: 'auto',
        placeholder: {
          '/zh-cn/': '搜索',
          '/': 'Type to search',
        },
        noData: {
          '/zh-cn/': '找不到结果',
          '/': 'No Results',
        },
        depth: 3,
        pathNamespaces: ['/zh-cn'],
      },
      markdown: {
        renderer: {
          code: function (code, lang) {
            if (lang === 'tex') {
              return `<span class='tex'>
                        ${katex.renderToString(code)}
                      </span>`;
            }
            return this.origin.code.apply(this, arguments);
          }
        }
      },
      timeUpdater: {
        text: '<p align="right">Posted @ <strong>{docsify-updated}</strong></p>',
        formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}',
        whereToPlace: 'top',
      },
      repo: 'https://github.com/js-sdsl/js-sdsl'
    }
  }
  function zoomWindow() {
    const minWidth = 400;
    const width = screen.width;
    if (width <= minWidth) {
      const zoom = width / minWidth;
      const style = document.createElement('style');
      style.innerHTML = `section.cover>*{zoom: ${zoom};}`;
      document.head.appendChild(style);
    }
  }
  function addTry(urlHash) {
    if (
        !urlHash.startsWith('#/start') &&
        !urlHash.startsWith('#/zh-cn/start')
    ) return true;
    const input = document.getElementById('input');
    if (!input) return false;
    const output = document.getElementById('output');
    if (!output) return false;
    const run = document.getElementById('run');
    if (!run) return false;
    const reset = document.getElementById('reset');
    if (!reset) return false;
    run.onclick = function () {
      output.innerText = '';
      const log = console.log;
      console.log = function (...data) {
        output.innerText += '> ' + data.join(' ') + '\n';
      }
      const func = new Function(input.value);
      try {
        const begin = Date.now();
        func();
        const end = Date.now();
        console.log(`Done in ${end - begin}ms.`);
      } catch (e) {
        console.log(e);
      }
      console.log = log;
    };
    reset.onclick = function () {
      output.innerText = '';
    }
    return true;
  }
  function onHashChange() {
    const urlHash = location.hash;
    const id = setInterval(function () {
      try {
        if (addTry(urlHash)) clearInterval(id);
      } catch (e) {
        console.error(e);
        clearInterval(id);
      }
    }, 1000);
    const lang = urlHash.startsWith('#/zh-cn') ? 'zh-cn' : 'en';
    document.documentElement.setAttribute('lang', lang);
    const tableStyle = document.getElementById('table-style');
    if (urlHash.includes('performance')) {
      tableStyle.innerHTML =
        '.markdown-section table{display:table;text-align:center;table-layout:fixed;}';
    } else {
      tableStyle.innerHTML = '';
    }
    const coverpages = window.$docsify.coverpage;
    const mathResult = coverpages.some(
      page => urlHash === `#${page}`
    );
    const mainStyle = document.getElementById('main-style');
    if (mathResult) {
      mainStyle.innerHTML = 'body>main{display:none;}';
    } else {
      mainStyle.innerHTML = '';
    }
  }
  window.$docsify = getDocsifyConfig();
  window.addEventListener('load', zoomWindow);
  window.addEventListener('load', onHashChange);
  window.addEventListener('hashchange', onHashChange);
})();
