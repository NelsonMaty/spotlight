<template>
  <Popover class="relative">
    <PopoverButton class="group flex items-center rounded-full dark:ring-white/10 bg-white/90 px-4 py-2 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur text-sm dark:bg-zinc-800/90 dark:ring-white-10 dark:hover:ring-white/20 dark:text-zinc-200">
      Menu
      <svg viewBox="0 0 8 6" aria-hidden="true" class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
        <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        </path>
      </svg>
    </PopoverButton>
    <PopoverPanel class="absolute z-10">
      <ul>
        <li>
          <a :class='{ "bg-blue-500": active }' href="/account-settings">
            About
          </a>
        </li>
        <li>
          <a :class='{ "bg-blue-500": active }' href="/account-settings">
            Articles
          </a>
        </li>
        <li>
          <a :class='{ "bg-blue-500": active }' href="/account-settings">
            Projects
          </a>
        </li>
        <li>
          <a :class='{ "bg-blue-500": active }' href="/account-settings">
            Speaking
          </a>
        </li>
        <li>
          <a :class='{ "bg-blue-500": active }' href="/account-settings">
            Uses
          </a>
        </li>
      </ul>
    </PopoverPanel>
  </Popover>
</template>

<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>
