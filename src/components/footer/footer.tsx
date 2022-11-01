import { component$ } from '@builder.io/qwik'

export default component$(() => (
    <footer>
        <div class="container m-auto flex flex-row  ml-16 min-h-[80px] ">
            <span class="my-auto">
                © 2022 Made by Adam Kościelniak&nbsp;
                <a href="https://www.builder.io/" target="_blank">
                    using qwik&nbsp;
                </a>
                and&nbsp;
                <a href="https://tailwindcss.com/" target="_blank">
                    Tailwind
                </a>
            </span>
        </div>
    </footer>
))
