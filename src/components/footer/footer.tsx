import { component$ } from '@builder.io/qwik'
import Github from '~/components/icons/github'
import Stackoverflow from '~/components/icons/stackoverflow'
import LinkedIn from '~/components/icons/linkedIn'

export default component$(() => (
    <footer>
        <div class="container m-auto flex flex-row min-h-[80px] w-full justify-around ">
            <div class="flex">
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
            <div class="flex justify-between items-center">
                <a
                    href="https://github.com/tackgnol"
                    target="_blank"
                    class="cursor-pointer"
                >
                    <Github color="#838383" />
                </a>
                <a
                    href="https://stackoverflow.com/users/4288279/tackgnol"
                    target="_blank"
                    className="cursor-pointer"
                >
                    <Stackoverflow color="#838383" />
                </a>
                <a
                    href="https://www.linkedin.com/in/adamkoscielniak/"
                    target="_blank"
                    className="cursor-pointer"
                >
                    <LinkedIn color="#838383" />
                </a>
            </div>
        </div>
    </footer>
))
