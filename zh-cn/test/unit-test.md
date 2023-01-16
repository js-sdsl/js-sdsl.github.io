Js-sdsl 使用 [karma](https://karma-runner.github.io/) 和 [mocha](https://mochajs.org/) 进行单元测试，并同步到 [coveralls](https://coveralls.io/github/js-sdsl/js-sdsl) 上

我们对于每个容器的每个函数都进行了严格的单元测试，所有的 Pull Request 都要求覆盖率在 **100%** 以上

我们还在不同版本的浏览器和 NodeJs 上进行了实验，包括 `firefox 31` 和 `node 10`

以下是支持的各平台版本：

<style>.markdown-section>table{display:table;text-align:center;}</style>
<table>
  <tr>
    <td>
      <img alt="IE / Edge" src="/assets/image/platform/edge.png" />
      <div>IE / Edge</div>
    </td>
    <td>
      <img alt="Firefox" src="/assets/image/platform/firefox.png" />
      <div>Firefox</div>
    </td>
    <td>
      <img alt="Chrome" src="/assets/image/platform/chrome.png" />
      <div>Chrome</div>
    </td>
    <td>
      <img alt="Safari" src="/assets/image/platform/safari.png" />
      <div>Safari</div>
    </td>
    <td>
      <img alt="Opera" src="/assets/image/platform/opera.png" />
      <div>Opera</div>
    </td>
    <td>
      <img alt="NodeJs" src="/assets/image/platform/nodejs.png" />
      <div>NodeJs</div>
    </td>
  </tr>
  <tr>
    <td>Edge 12</td>
    <td>31</td>
    <td>49</td>
    <td>10</td>
    <td>36</td>
    <td>10</td>
  </tr>
</table>

单元测试的代码可以在[这里](https://github.com/js-sdsl/js-sdsl/tree/main/test)找到
