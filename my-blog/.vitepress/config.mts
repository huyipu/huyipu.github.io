//默认配置
import { defineConfig } from "vitepress";
import { nav, sidebar } from "./configs";

export default defineConfig({
  //网站标题
  title: "卡比~ & My Blog",
  //网站描述
  description:
    "在这里记录了我的个人笔记，因为治好了也流口水，所以要经常查询!!!",
  //设置为中文，相当于html标签加lang="zh-CN"
  lang: "zh-CN",
  srcDir: "docs",
  locales: {
    "/": {
      label: "简体中文",
      lang: "zh-CN",
    },
  },
  //主题配置
  themeConfig: {
    //主导航
    nav,

    //侧边导航
    sidebar,
    // footer: {
    //   message: `<span class="footer-container">
    //   <span class="footer-container-text">
    //     本站总访问量
    //     <span id="busuanzi_value_site_pv" class="font-bold">--</span> 次
    //   </span>
    //   <span class="footer-container-text">
    //     本站访客数
    //     <span id="busuanzi_value_site_uv" class="font-bold">--</span> 人次
    //   </span>
    // </span>`,
    // },
    //头上角要主题切换的文字 Appearance
    darkModeSwitchLabel: "切换主题",
    // 文章翻页
    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
    },
    //当前页面 On this page
    outlineTitle: "页面大纲",

    // 返回顶部 Return to top
    returnToTopLabel: "返回顶部",

    // 菜单  Menu
    sidebarMenuLabel: "菜单",

    //下面这个是搜索相关，我用的是algolia，local也可以用
    search: {
      //搜索用的啥引擎
      provider: "algolia",
      //具体配置，vscode 可以ctrl + 鼠标左键点进去看具体的参数
      options: {
        appId: "S7N9RDYS3B",
        apiKey: "1b3f9e5f7071232d57370d576553915f",
        indexName: "huyipuio",
        //搜索框的占位符  Search docs  是点搜索框里面显示的那个
        placeholder: "搜索笔记",

        translations: {
          //外面的搜索按钮  Search
          button: { buttonText: "搜索笔记" },

          //这里就是点击导航栏上面的搜索弹出来的弹框  可以直接跟着改
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },

    logo: "/logo.svg",

    notFound: {
      title: "页面未找到",
      quote: "哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！",
      linkText: "返回首页",
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg viewBox="0 0 1036 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27291" width="200" height="200"><path d="M512.376483 518.220148m-481.803639 0a481.803638 481.803638 0 1 0 963.607277 0 481.803638 481.803638 0 1 0-963.607277 0Z" fill="#70C4FF" p-id="27292"></path><path d="M512.376483 1016.392596c-274.693181 0-498.172448-223.479267-498.172448-498.172448S237.683302 20.0477 512.376483 20.0477c274.689089 0 498.172448 223.479267 498.172448 498.168356 0 274.693181-223.483359 498.17654-498.172448 498.17654z m0-963.607277c-256.642476 0-465.434828 208.792353-465.434829 465.430737 0 256.642476 208.792353 465.434828 465.434829 465.434828 256.638384 0 465.434828-208.792353 465.434828-465.434828 0-256.638384-208.796445-465.430736-465.434828-465.430737z" fill="#6E6E96" p-id="27293"></path><path d="M506.000831 52.39656s-48.210237 272.25832 56.722018 292.113686c104.932255 19.859458 150.306595-8.507689 204.192717 45.378433 53.877937 53.886122 174.958023 35.221586 178.665559-19.859458 0.008184 0.008184-73.737396-275.090124-439.580294-317.632661zM207.76521 879.524793s111.287445 16.933534 213.50657-25.707216c108.251031-45.157454 206.320662-153.420762 151.190511-282.202372-86.701493-202.50673-170.542537-95.364686-141.119601-254.334474C460.765625 158.302759 368.326865 94.939097 303.8624 94.939097c-64.468557 0-345.811567 420.359219-96.09719 784.585696z" fill="#A3D9FF" opacity=".26" p-id="27294"></path><path d="M184.398734 870.808402s96.555516 16.004604 185.241728-24.307683c93.928323-42.702132 179.017488-145.076761 131.179641-266.827967C425.589053 388.186323 352.846063 489.505163 378.369129 339.194476c25.523067-150.31478-54.671825-210.224624-110.604047-210.224624-55.940407 0-300.03619 397.459254-83.366348 741.83855z" fill="#A3D9FF" opacity=".26" p-id="27295"></path><path d="M202.825922 149.046197c153.023818 23.481058 97.893667 154.194188 141.037757 307.02158 27.994757 99.149973 70.263116 84.659484 108.124172 158.19227 57.826913 76.462803-221.212187 331.816235-370.823108 118.489721-148.297324-366.157997 121.661178-583.703571 121.661179-583.703571z" fill="#9EE3C3" p-id="27296"></path><path d="M228.63135 832.300777c-63.87928 0-119.504588-31.174398-160.86857-90.15122l-1.072157-1.526391-0.699767-1.72691c-78.869018-194.743822-40.439144-348.119569 5.688162-442.498034 49.978068-102.251862 118.006842-157.787142 120.879568-160.103328l5.618594-4.525976 7.136801 1.096711c118.772084 18.22667 125.855686 97.75044 134.052367 189.829086 3.486556 39.150101 7.435532 83.525944 20.25231 128.924838 14.952908 52.965376 33.376003 69.894818 54.708654 89.496467 16.196937 14.88334 34.525912 31.726845 51.619042 64.493111 14.277694 20.039515 13.479715 48.443492-2.312095 80.186706-35.057898 70.455449-134.870808 146.504939-235.002909 146.50494z m-133.000671-107.436683c35.30343 49.568848 80.04348 74.703155 133.000671 74.703156 92.545158 0 178.915183-74.54356 205.686371-128.35193 10.14457-20.38326 11.822373-37.545957 4.611912-47.076697l-0.851178-1.125355-0.646568-1.256306c-14.596886-28.354871-29.496595-42.039196-45.263851-56.533777-22.904057-21.046197-46.585633-42.80853-64.063429-104.703092-13.647495-48.34528-17.739698-94.337543-21.357205-134.915822-7.889766-88.612552-12.730842-143.047028-99.039483-159.125291-16.630711 14.989738-68.405256 65.524345-107.240257 145.563732-61.968221 127.725822-63.592826 266.606989-4.836983 412.821382z" fill="#6E6E96" p-id="27297"></path><path d="M553.355798 38.167972s-75.480674 257.280859 90.388567 257.280859c168.549634 0 200.141437 152.577768 305.556572 19.511622-112.408709-270.776943-395.945139-276.792481-395.945139-276.792481z" fill="#9EE3C3" p-id="27298"></path><path d="M867.804725 385.804661h-0.016369c-27.004444-0.004092-50.935644-13.434701-78.643946-28.98507-37.590972-21.091211-80.190799-45.00195-145.400045-45.00195-41.363982 0-73.135842-14.416829-94.427571-42.849451-57.344033-76.585569-13.557467-228.958726-11.666869-235.408038l3.523386-12.022891 12.530324 0.265994c3.020045 0.065475 74.969149 1.984718 161.76067 38.106589 80.338118 33.437386 188.744653 103.741424 248.953228 248.77317l3.691166 8.892356-5.978708 7.546021c-33.236868 41.961444-62.33652 60.68327-94.325266 60.68327z m-302.020908-330.388056c-3.498833 14.498673-8.892356 40.001279-11.560472 68.749001-5.229835 56.320982 2.140222 99.616484 21.320374 125.209118 14.981553 19.990409 37.288149 29.705297 68.200646 29.705298 73.766041 0 122.369129 27.274529 161.416925 49.188273 24.684165 13.852105 44.18351 24.794655 62.635251 24.798747h0.008184c12.272515 0 31.829151-4.419579 62.553407-40.791074-45.259759-103.10304-121.36654-177.654784-226.339717-221.666422-60.666901-25.43713-114.536654-32.991336-138.234598-35.192941z" fill="#6E6E96" p-id="27299"></path><path d="M759.013523 932.162793s-108.562038-173.587135 0-245.908629c108.582499-72.317401 235.17069-68.065603 235.17069-168.038108 0 274.39445-235.17069 413.946737-235.17069 413.946737z" fill="#9EE3C3" p-id="27300"></path><path d="M753.615908 954.399821l-8.479043-13.557467c-1.162185-1.85786-28.637233-46.155951-42.681671-100.410371-19.663033-75.979923-3.241024-134.007353 47.485917-167.800761 39.641165-26.398798 81.287509-42.849452 118.031395-57.360401 72.182359-28.506282 109.84699-45.771284 109.84699-97.058858h32.737619c0 146.717734-66.064516 255.255219-121.481122 320.468557-59.877106 70.463634-119.209949 106.073979-121.706192 107.555357l-13.753893 8.163944z m216.714857-353.803638c-24.234023 19.012373-56.820231 31.886441-90.331277 45.120624-35.229771 13.913488-75.161482 29.684836-111.913552 54.156207-77.113463 51.373509-25.162953 167.825314-3.441542 208.927395 20.510119-14.379999 60.589149-45.349787 100.22213-92.193228 55.719428-65.851722 91.018767-138.23869 105.464241-216.010998z" fill="#6E6E96" p-id="27301"></path><path d="M508.124684 32.164711C242.033313 32.164711 26.321046 247.876978 26.321046 513.968349c0 266.083187 215.712267 481.795454 481.803638 481.795454 266.087279 0 481.799546-215.712267 481.799546-481.795454C989.928323 247.876978 774.216056 32.164711 508.124684 32.164711z m348.029541 536.553215c-17.003101 59.386042-119.647815 41.032514-160.418428 85.187378-33.167301 35.929537-1.080341 137.543016-45.611688 159.035263-51.250743 24.720995-108.729819 38.569008-169.454011 38.569008-67.251255 0 81.991368-122.66786 26.746635-152.594137-19.654848-10.656095-29.742127 48.017903-38.998689-82.290098-3.396528-47.850123-72.251926-70.042137-117.331628-179.606765-11.327216-27.520061-32.483903-221.277662-40.778797-210.216439-51.050225 68.069695-8.507689 281.388024 39.702548 392.794143 30.470539 70.410435-175.874676 192.795933-175.874677 83.390901 0-216.686211-97.803638-89.062694-84.008824-242.016944 19.376579-214.803798 174.855718-390.531155 390.543432-390.531155 90.986029 0 183.510726 26.173727 249.579335 78.529364 31.235781 24.745548 56.55833 55.363407 73.02126 91.829023 28.878673 63.993862-201.974743 22.863135-180.994022 33.359634 42.804437 21.426772 261.111161 101.04057 238.014771 94.771316-301.24339-81.86451-11.507273 69.612456 10.901627 92.033633 37.382269 37.390454-5.233927 73.536878-15.038844 107.755875z" fill="#6E6E96" opacity=".2" p-id="27302"></path><path d="M767.013779 821.980242l27.33182-16.986732c61.468973-40.578279 78.553918-124.063301 37.975639-185.536366l-77.473577-117.352089c-40.578279-61.460788-126.395857-69.268711-192.501294-37.975639l-22.466192 16.888519c-56.8366 49.867579-80.890566 126.391764-40.304102 187.856645l77.4613 117.35209c18.684996 28.309856 46.475143 47.199463 77.01525 55.38796m-17.236356-150.208383l-44.191695-66.927971c-15.227085-23.055469-8.80642-54.360817 14.236773-69.575626l1.031235 1.07625c23.055469-15.214809 54.356725-8.802327 69.567441 14.236772l61.829087 93.654145c15.210716 23.051376 13.234183 54.360817-9.813102 69.579718" fill="#FFFFFF" p-id="27303"></path><path d="M599.446274 570.264778a49.793919 49.793919 0 0 1 13.553374-13.320119l1.031235 1.07625c23.055469-15.214809 54.356725-8.802327 69.567442 14.236772l61.829086 93.654145c0.40922 0.617923 0.76115 1.276767 1.141725 1.911058 12.194763-16.565235 11.151252-40.574187-1.141725-59.201892l-61.829086-93.654145c-15.210716-23.043192-46.511973-29.447489-69.567442-14.236773l-1.031235-1.076249c-23.043192 15.214809-29.455673 46.520157-14.236772 69.575626l0.683398 1.035327z m257.931519 96.113559c-7.165446 33.019981-26.640238 63.3964-56.89389 83.37044l-27.33182 16.986732-112.961156 19.634388c-30.540107-8.188497-58.330254-27.078104-77.01525-55.38796l-77.4613-117.352089c-8.184405-12.395281-13.700694-25.412577-16.888519-38.691775-7.304581 32.344768-2.934109 65.958119 16.888519 95.982609l77.4613 117.352089c18.684996 28.309856 46.475143 47.199463 77.01525 55.38796l112.961156-19.634387 27.33182-16.986733c47.404073-31.293072 68.380703-88.109211 56.89389-140.661274z" fill="#6E6E96" opacity=".15" p-id="27304"></path><path d="M658.275776 857.934333c-1.407718 0-2.827712-0.180057-4.251798-0.564724-35.569424-9.534832-66.269126-31.620448-86.439592-62.181016l-77.4613-117.352089c-42.170146-63.862911-24.418172-149.885099 43.168643-209.17702a14.691007 14.691007 0 0 1 0.957576-0.777518l22.466191-16.88852c0.883916-0.667029 1.829214-1.239937 2.827712-1.710541 68.073788-32.222002 165.906071-27.831069 213.171009 43.749737l77.469485 117.352089c22.03651 33.380095 29.729851 73.475495 21.660027 112.903865s-30.896128 73.279069-64.272131 95.311487l-0.380575 0.245532-27.335913 16.986733a16.36881 16.36881 0 1 1-17.28137-27.806516l27.139486-16.863966c25.981393-17.219988 43.749736-43.647431 50.051728-74.437163 6.314268-30.859299 0.311007-62.217846-16.904888-88.297451l-77.469484-117.35209c-36.776623-55.694875-114.843569-58.481665-170.374757-32.884939l-20.600147 15.484894c-64.018415 56.480578-64.73455 124.096039-36.981233 166.131143l77.4613 117.356181c15.763164 23.873909 39.768023 41.130727 67.603184 48.594904a16.36881 16.36881 0 0 1-4.223153 32.176988z m75.423383-108.177371a16.364718 16.364718 0 0 1-9.035583-30.028582c15.746795-10.398286 14.989738-32.0133 5.16436-46.904824l-61.81681-93.645961c-10.287797-15.574922-31.321717-19.871735-46.888456-9.596215-1.669619 1.104895-3.482464 1.861952-5.340324 2.295726a33.646088 33.646088 0 0 0-10.148662 18.103904 33.576521 33.576521 0 0 0 4.857444 25.416669l44.195787 66.936155a16.364718 16.364718 0 0 1-4.640558 22.678986 16.360625 16.360625 0 0 1-22.678986-4.640557l-44.191694-66.932064c-9.776272-14.793312-13.189168-32.561655-9.612584-50.031266 3.572493-17.461428 13.692509-32.45935 28.489914-42.223345a16.381086 16.381086 0 0 1 7.374149-2.631286c29.778957-15.263915 67.042553-5.986892 85.903513 22.584865l61.820902 93.650053c21.320375 32.31203 14.973369 72.833019-14.445474 92.258704a16.303335 16.303335 0 0 1-9.006938 2.709038z" fill="#6E6E96" p-id="27305"></path><path d="M839.539883 754.458902l41.347613 62.635251c15.222993 23.043192 8.80642 54.360817-14.236772 69.579718l-1.027143-1.088526c-23.047284 15.222993-54.356725 8.80642-69.571533-14.236772l-61.808626-93.654145c-15.227085-23.051376-6.396112-50.215416 8.822789-65.426133 0 0 10.893443-26.173727-3.773011-48.390294l-31.792321-48.157038-26.010038 18.517216c-56.832507 49.867579-80.882381 126.391764-40.304102 187.856645l77.469484 117.352089c40.578279 61.460788 124.063301 78.553918 185.540458 37.971547l31.763676-19.204706c61.468973-40.586464 78.55801-124.071486 37.979731-185.544551l-77.469485-117.339813c-17.842003-27.033089-44.441318-43.692445-74.257105-51.209821-0.012277 0.008184 58.944084 70.5864 17.326385 150.339333z" fill="#FFFFFF" p-id="27306"></path><path d="M834.94434 1015.766489c-50.894722 0-97.905943-25.179322-125.749289-67.35356l-77.469484-117.356182c-42.166054-63.862911-24.41408-149.881006 43.172735-209.177019 0.417405-0.364206 0.847086-0.707951 1.297229-1.031235l26.005946-18.517216a16.356533 16.356533 0 0 1 23.153681 4.317273l31.796413 48.152946c19.245628 29.156942 5.802743 62.307874 5.217558 63.703316a16.393363 16.393363 0 0 1-3.535662 5.283033c-10.545606 10.537421-17.146328 29.066914-6.735766 44.830078l61.812718 93.658237c6.265162 9.481633 16.872151 15.149333 28.375332 15.149333 6.612999 0 13.017296-1.923335 18.517216-5.553119a16.327888 16.327888 0 0 1 5.344416-2.295725 33.719748 33.719748 0 0 0 10.140478-18.099812 33.580613 33.580613 0 0 0-4.853352-25.420761l-41.347614-62.635251a16.36881 16.36881 0 0 1-0.851178-16.59388c35.892708-68.785831-13.30375-129.743278-15.419419-132.304997a16.393363 16.393363 0 0 1-1.219476-19.184245 16.393363 16.393363 0 0 1 17.81745-7.140894c35.782218 9.023306 64.800026 29.099652 83.914703 58.060169l77.465392 117.33572c45.648518 69.158221 26.529748 162.570926-42.616196 208.227629a12.587615 12.587615 0 0 1-0.552448 0.347837l-31.49359 19.036926a149.242623 149.242623 0 0 1-82.187793 24.561399z m-139.0735-368.736085c-63.858819 56.456025-64.554493 123.989642-36.829822 165.987915l77.469484 117.356181c21.770517 32.970875 58.567601 52.654369 98.433838 52.654369 22.998178 0 45.276128-6.686659 64.427635-19.327472 0.184149-0.118674 0.368298-0.237348 0.552447-0.347837l31.477221-19.028741c53.869753-35.774034 68.720356-108.692989 33.07318-162.697785l-77.469484-117.33572a101.081492 101.081492 0 0 0-21.983311-23.869817c10.827968 29.136481 16.896704 69.235973-2.492152 112.719716l36.228268 54.872342c9.772179 14.793312 13.180984 32.557563 9.6044 50.027175-3.572493 17.46552-13.692509 32.467534-28.485822 42.231529a16.364718 16.364718 0 0 1-7.394609 2.631287 66.154545 66.154545 0 0 1-30.188178 7.255474c-22.535759 0-43.356885-11.159436-55.694875-29.852616l-61.812718-93.654145c-19.544359-29.586624-9.800825-62.999457 8.127114-83.083986 1.571406-5.450814 4.427763-19.364302-3.077336-30.740625l-22.449822-34.00211-11.515458 8.204866z" fill="#6E6E96" p-id="27307"></path><path d="M851.079894 764.550273l39.898974 60.445923c11.986061-16.46293 13.283289-39.358803 1.448639-57.28265l-28.125707-42.608012c-2.054286 12.685828-6.162857 25.932287-13.221906 39.444739z m-103.52863-33.539691a57.695962 57.695962 0 0 1 7.042681-8.650916s10.897535-26.173727-3.768919-48.390294c-0.793887-1.211292-1.612328-2.438953-2.418491-3.666613-11.077592 15.68132-15.632213 38.335752-2.639471 58.019246l1.7842 2.688577z m116.873302-105.038652a135.693341 135.693341 0 0 0-30.679242-11.744621s20.375076 24.422264 28.710893 60.744653c4.210876-17.481889 4.227245-34.047124 1.968349-49.000032z m139.720068 200.526104c-7.345503 32.62713-26.71799 62.573867-56.660635 82.339205l-31.767768 19.204706c-61.468973 40.582372-144.958087 23.48515-185.540458-37.971546L652.706289 772.718309a121.481122 121.481122 0 0 1-16.626619-37.635985c-7.668787 32.692605-3.416989 66.743822 16.626619 97.107963l77.469484 117.35209c40.582372 61.464881 124.063301 78.553918 185.540458 37.971546l31.767768-19.204706c47.760095-31.526328 68.708079-88.935836 56.660635-141.811183z" fill="#6E6E96" opacity=".15" p-id="27308"></path></svg>',
        },
        link: "https://huyipu.top",
      },
    ],
  },

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?3109cccb98a2835359f8b31187d6a4a3";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        `,
    ],
  ],
});
