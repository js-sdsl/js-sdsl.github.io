(function (window) {
  function getDocsifyConfig() {
    return {
      el: '#root',
      name: 'Js-sdsl',
      nameLink: {
        '/zh-cn/': '/#/zh-cn/',
        '/': '/',
      },
      maxLevel: 4,
      subMaxLevel: 2,
      auto2top: true,
      loadNavbar: true,
      autoHeader: true,
      mergeNavbar: true,
      loadSidebar: true,
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
      alias: {
        '.*?/test/benchmark':
          'https://raw.githubusercontent.com/js-sdsl/benchmark/main/README.md',
      },
      plugins: [
        EditOnGithubPlugin.create(
          '//github.com/js-sdsl/js-sdsl.github.io/blob/main/',
          null,
          function (file) {
            if (file.indexOf('zh-cn') >= 0) {
              return '在 github 上编辑此页';
            } else {
              return 'Edit on github';
            }
          })
      ],
      search: {
        maxAge: 24 * 60 * 60,
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
        pathNamespaces: ['/zh-cn', '/'],
        hideOtherSidebarContent: false
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
      repo: '//github.com/zly201/js-sdsl'
    }
  }
  function changeSectionSize() {
    const minWidth = 400;
    const width = window.screen.width;
    if (width <= minWidth) {
      const zoom = width / minWidth;
      const style = document.createElement('style');
      style.innerHTML =
        `section.cover > * {
          zoom: ${zoom};
        }`;
      document.head.appendChild(style);
    }
  }
  function onUrlHashChange() {
    const urlHash = window.location.hash;
    const coverpages = window.$docsify.coverpage;
    const mathResult = coverpages.some(
      page => urlHash === `#${page}`
    );
    const mainStyle = document.getElementById('main-style');
    if (mathResult) {
      mainStyle.innerHTML =
        `body > main {
          display: none;
        }`;
    } else {
      mainStyle.innerHTML = '';
    }
  }
  changeSectionSize();
  window.$docsify = getDocsifyConfig();
  onUrlHashChange();
  window.onhashchange = onUrlHashChange;
})(window);
