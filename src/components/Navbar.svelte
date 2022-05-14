<!-- svelte-ignore a11y-missing-attribute -->
  <div id="nav" class="inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out text-base-content sticky">
    <div class="mx-auto space-x-1 navbar max-w-none">
      <div class="flex-none lg:hidden">
        <label for="main-menu" class="btn btn-square btn-ghost drawer-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <div class="flex items-center flex-none lg:hidden">
        <a href="/" class="px-2 flex-0 btn btn-ghost md:px-4 nuxt-link-active" aria-label="Homepage">
          <div class="inline-block text-3xl font-title text-primary"><span class="lowercase">daisy</span><span class="uppercase text-base-content">UI</span></div>
        </a>
      </div>

      <div class="hidden md:flex flex-1 justify-center px-2 lg:ml-3 lg:justify-start">
        <div class="max-w-lg w-full lg:max-w-md">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                  </svg>
              </div>
              <input class="block w-3/4 pl-10 pr-3 py-2.5 border rounded-md leading-5 bg-base-200 text-base-content sm:text-sm transition" autocomplete="off" placeholder="Search">
            </div>
        </div>
      </div>
  
      <div class="flex-1"></div>
  <!----> 
  <div class="avatar">
    <div class="w-10 rounded-full">
      <img src="https://api.lorem.space/image/face?hash=92310" />
    </div>
  </div>
  <div title="Change Theme" class="dropdown dropdown-end">
    <div tabindex="0" class="m-1 normal-case btn-ghost btn">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current md:mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
      </svg>
      <span class="hidden md:inline">
      Change Theme
      </span> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" class="inline-block w-4 h-4 ml-1 fill-current">
        <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
      </svg>
    </div>
    <div class="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content">
      <ul class="p-4 menu compact">
        <li><a tabindex="0" data-set-theme="light" data-act-class="active" class="active">🌝  light</a></li>
        <li><a tabindex="0" data-set-theme="dark" data-act-class="active">🌚  dark</a></li>
        <li><a tabindex="0" data-set-theme="cupcake" data-act-class="active">🧁  cupcake</a></li>
        <li><a tabindex="0" data-set-theme="bumblebee" data-act-class="active">🐝  bumblebee</a></li>
        <li><a tabindex="0" data-set-theme="emerald" data-act-class="active">✳️  Emerald</a></li>
        <li><a tabindex="0" data-set-theme="corporate" data-act-class="active">🏢  Corporate</a></li>
        <li><a tabindex="0" data-set-theme="synthwave" data-act-class="active">🌃  synthwave</a></li>
        <li><a tabindex="0" data-set-theme="retro" data-act-class="active">👴  retro</a></li>
        <li><a tabindex="0" data-set-theme="cyberpunk" data-act-class="active">🤖  cyberpunk</a></li>
        <li><a tabindex="0" data-set-theme="valentine" data-act-class="active">🌸  valentine</a></li>
        <li><a tabindex="0" data-set-theme="halloween" data-act-class="active">🎃  halloween</a></li>
        <li><a tabindex="0" data-set-theme="garden" data-act-class="active">🌷  garden</a></li>
        <li><a tabindex="0" data-set-theme="forest" data-act-class="active">🌲  forest</a></li>
        <li><a tabindex="0" data-set-theme="aqua" data-act-class="active">🐟  aqua</a></li>
        <li><a tabindex="0" data-set-theme="lofi" data-act-class="active">👓  lofi</a></li>
        <li><a tabindex="0" data-set-theme="pastel" data-act-class="active">🖍  pastel</a></li>
        <li><a tabindex="0" data-set-theme="fantasy" data-act-class="active">🧚‍♀️  fantasy</a></li>
        <li><a tabindex="0" data-set-theme="wireframe" data-act-class="active">📝  Wireframe</a></li>
        <li><a tabindex="0" data-set-theme="black" data-act-class="active">🏴  black</a></li>
        <li><a tabindex="0" data-set-theme="luxury" data-act-class="active">💎  luxury</a></li>
        <li><a tabindex="0" data-set-theme="dracula" data-act-class="active">🧛‍♂️  dracula</a></li>
        <li><a tabindex="0" data-set-theme="cmyk" data-act-class="active">🖨  CMYK</a></li>
      </ul>
    </div>
  </div>
  
    </div>
  </div>