<script lang="ts">
    import { Route } from "svelte-router-spa";
    export let currentRoute;
    export let params = {};

    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'

    // import Themes from "@src/components/Themes.svelte";
    import Navbar from "@src/components/Navbar.svelte";

    // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
    onMount(() => {
    themeChange(false)
    // 👆 false parameter is required for svelte
    })
</script>
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-label-has-associated-control -->

<div class="w-full min-h-screen font-averta">
    <div class="drawer drawer-mobile">
        <input id="main-menu" type="checkbox" class="drawer-toggle"> 
        <main class="flex-grow block overflow-x-hidden bg-base-100 text-base-content drawer-content">

          <Navbar/>
          
        <div class="p-4 lg:p-10">
          <Route {currentRoute} {...params}/>
        </div>
        </main>

        <div class="drawer-side">
            <label for="main-menu" class="drawer-overlay"></label> 
            <aside class="flex flex-col p-4 overflow-y-auto bg-base-100 text-base-content w-80">
                <div class="sticky inset-x-0 top-0 z-50 hidden w-full py-1 transition duration-200 ease-in-out lg:block bg-base-100">
                    <div class="mx-auto space-x-1 navbar max-w-none">
                        <div class="flex items-center flex-none">
                            <a href="/" class="px-2 flex-0 btn btn-ghost md:px-4 nuxt-link-active" aria-label="Homepage">
                                <div class="inline-block text-3xl font-title text-primary"><span class="lowercase">daisy</span><span class="uppercase text-base-content">UI</span></div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="sticky mt-2 lg:hidden md:flex justify-center px-2">
                  <div class="max-w-lg w-full lg:max-w-md">
                      <label for="search" class="sr-only">Search</label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input class="block w-full pl-10 pr-3 py-2.5 border rounded-md leading-5 bg-base-200 text-base-content sm:text-sm transition" autocomplete="off" placeholder="Search"><!---->
                      </div>
                  </div>
                </div>

                <div>
                    <ul class="menu flex flex-col p-4 pt-2 compact">
                        <li class="mt-4 menu-title"><span>
                            Menu
                            </span>
                        </li>
                        <li class="mb-2">
                            <a href="/" class="capitalize">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 stroke-current">
                                    <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> 
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                                    <!----> <!----> <!----> <!---->
                                </svg>
                                Dashboard
                            </a>
                        </li>
                        <li class="mb-2">
                            <a href="/maps" class="capitalize">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 stroke-current">
                                    <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> 
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                                    <!----> <!----> <!----> <!---->
                                </svg>
                                Maps
                            </a>
                        </li>
                    </ul>
                </div>


            </aside>
        </div>
    </div>
</div>
