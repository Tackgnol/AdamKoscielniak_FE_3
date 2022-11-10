import { component$ } from '@builder.io/qwik'
import Me from '/Adam.png'
import Signature from './Signature.png'

export default component$(() => (
    <div class="bg-white font-black text-center flex flex-col mt-3 text-gray-300">
        <div class="text-3xl my-3 font-mono">About me</div>
        <div class="mx-auto my-3">
            <img src={Me} alt="Adams photo" />
        </div>
        <div class="text-justify w-1/2 mx-auto my-5 text-2xl">
            Full-stack developer, Experience with C# ASP.NET, Flask, and Django
            on the backend. React, Angular 4+ and Knockout on the frontend. I
            also code in VBA for Excel, Access and PowerPoint, I can train your
            employees, or do a project for you.
        </div>
        <div class="text-2xl">Hope you enjoyed your visit here!</div>
        <div class="mx-auto my-5">
            <img src={Signature} alt="Adams Signature" />
        </div>
    </div>
))
