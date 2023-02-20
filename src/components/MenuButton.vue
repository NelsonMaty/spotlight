<template>
  <Popover class="relative">
    <PopoverButton
      class="dark:ring-white-10 group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
    >
      Menu
      <svg
        viewBox="0 0 8 6"
        aria-hidden="true"
        class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
      >
        <path
          d="M1.75 1.75 4 4.25l2.25-2.5"
          fill="none"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </PopoverButton>
    <transition
      enter-active-class="transition ease-out duration-150"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <PopoverOverlay
        class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"
      />
    </transition>
    <transition
      enter-active-class="transition ease-out duration-150 origin-top"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <div class="flex items-center justify-between">
          <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
          <PopoverButton :as="CloseButton" />
        </div>
        <nav class="mt-6">
          <ul
            class="text-base -my-2 divide-y divide-zinc-100 text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"
          >
            <li>
              <a class="block py-2" href="/account-settings"> About </a>
            </li>
            <li>
              <a class="block py-2" href="/account-settings"> Articles </a>
            </li>
            <li>
              <a class="block py-2" href="/account-settings"> Projects </a>
            </li>
            <li>
              <a class="block py-2" href="/account-settings"> Speaking </a>
            </li>
            <li>
              <a class="block py-2" href="/account-settings"> Uses </a>
            </li>
          </ul>
        </nav>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import CloseButton from "./CloseButton.vue";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverOverlay,
} from "@headlessui/vue";
</script>
