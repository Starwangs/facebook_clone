<script>
    import Comment from './Comment.svelte'
    import { db } from './lib/shared/firebase'
    import { diff_minutes } from './lib/shared/fx'
    import { v4 as uuidv4 } from 'uuid'
    export let displayName, photoURL, timestamp, content, like, comments, share, id, thisDisplayName, thisPhotoURL

    let newComment = {
        id: '',
        displayName: thisDisplayName,
        photoURL: thisPhotoURL,
        content: '',
        timestamp: Date.now(),
        replys: []
    }

    timestamp = diff_minutes(timestamp)

    function addComment() {
        newComment.id = uuidv4()
        if (newComment.content) db.collection('posts').doc(id).update({comments: [...comments, newComment]})
        newComment.content = ''
        newComment.id = ''
    }

    function deletePost() { db.collection('posts').doc(id).delete() } 
</script>

<div class="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg py-2">
    <div class="flex items-center justify-between px-4 py-2">
        <div class="flex space-x-2 items-center">
            <div class="relative">
                <img src={photoURL} alt="" class="w-10 h-10 rounded-full" />
                <span
                    class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>
                <div class="font-semibold">{displayName}</div>
                <span class="text-sm text-gray-500">{timestamp}m <span class="ml-1"><i class="custom5 v7 filter-gray global"></i></span> </span>
            </div>
        </div>
        <div
            class="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer" on:click={deletePost}>
            <i class="bx bx-dots-horizontal-rounded"></i>
        </div>
    </div>

    <div class="text-justify px-4 py-2">
        {content.text}
    </div>

    <div class="py-2">
        {#if content.photo.length <= 1}
            <img src={content.photo[0]} alt="" />
        {:else}
            <div class="grid grid-cols-2 gap-1">
                {#each content.photo as _, i}
                    <img src={content.photo[i]} alt="" />
                {/each}
            </div>
        {/if}
    </div>

    <div class="py-2 px-4">
        <div class="flex items-center justify-between">
            <div class="flex flex-row-reverse items-center">
                <span class="ml-2 text-gray-500 dark:text-dark-txt">{like}</span>
                <span class="rounded-full grid place-items-center text-2xl -ml-1">
                    <img class="align-top"
                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 180 180' %3e %3cdefs%3e %3cradialGradient cx='50.001%25' cy='50%25' fx='50.001%25' fy='50%25' r='50%25' id='c'%3e %3cstop stop-color='%23F08423' stop-opacity='0' offset='0%25'/%3e %3cstop stop-color='%23F08423' stop-opacity='.34' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50%25' cy='44.086%25' fx='50%25' fy='44.086%25' r='57.412%25' gradientTransform='matrix(-1 0 0 -.83877 1 .81)' id='d'%3e %3cstop stop-color='%23FFE874' offset='0%25'/%3e %3cstop stop-color='%23FFE368' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='10.82%25' cy='52.019%25' fx='10.82%25' fy='52.019%25' r='10.077%25' gradientTransform='matrix(.91249 .4091 -.31644 .7058 .174 .109)' id='e'%3e %3cstop stop-color='%23F28A2D' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%23F28A2D' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='74.131%25' cy='76.545%25' fx='74.131%25' fy='76.545%25' r='28.284%25' gradientTransform='rotate(-38.243 1.4 .537) scale(1 .40312)' id='f'%3e %3cstop stop-color='%23F28A2D' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%23F28A2D' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='31.849%25' cy='12.675%25' fx='31.849%25' fy='12.675%25' r='10.743%25' gradientTransform='matrix(.98371 -.17976 .03575 .19562 0 .16)' id='g'%3e %3cstop stop-color='%23D45F00' stop-opacity='.25' offset='0%25'/%3e %3cstop stop-color='%23D45F00' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='68.023%25' cy='12.637%25' fx='68.023%25' fy='12.637%25' r='12.093%25' gradientTransform='rotate(11.848 .192 .076) scale(1 .19886)' id='h'%3e %3cstop stop-color='%23D45F00' stop-opacity='.25' offset='0%25'/%3e %3cstop stop-color='%23D45F00' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50.709%25' cy='66.964%25' fx='50.709%25' fy='66.964%25' r='87.22%25' gradientTransform='matrix(0 -.8825 1 0 -.163 1.117)' id='j'%3e %3cstop stop-color='%233B446B' offset='0%25'/%3e %3cstop stop-color='%23202340' offset='68.84%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='49.239%25' cy='66.964%25' fx='49.239%25' fy='66.964%25' r='87.22%25' gradientTransform='matrix(0 -.8825 1 0 -.177 1.104)' id='k'%3e %3cstop stop-color='%233B446B' offset='0%25'/%3e %3cstop stop-color='%23202340' offset='68.84%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='48.317%25' cy='42.726%25' fx='48.317%25' fy='42.726%25' r='29.766%25' gradientTransform='matrix(-.09519 -.96847 1.71516 -1.15488 -.204 1.389)' id='l'%3e %3cstop stop-color='%23E38200' offset='0%25'/%3e %3cstop stop-color='%23CD6700' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50%25' cy='29.807%25' fx='50%25' fy='29.807%25' r='31.377%25' gradientTransform='matrix(.07236 -.9819 2.22613 1.12405 -.2 .454)' id='m'%3e %3cstop stop-color='%23E38200' offset='0%25'/%3e %3cstop stop-color='%23CD6700' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='73.646%25' cy='44.274%25' fx='73.646%25' fy='44.274%25' r='29.002%25' gradientTransform='scale(.92955 1) rotate(20.36 .764 .598)' id='p'%3e %3cstop stop-color='%23FF7091' stop-opacity='.7' offset='0%25'/%3e %3cstop stop-color='%23FE6D8E' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='26.749%25' cy='29.688%25' fx='26.749%25' fy='29.688%25' r='29.002%25' gradientTransform='scale(.92955 1) rotate(20.36 .278 .353)' id='q'%3e %3cstop stop-color='%23FF7091' stop-opacity='.7' offset='0%25'/%3e %3cstop stop-color='%23FE6D8E' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='23.798%25' cy='53.35%25' fx='23.798%25' fy='53.35%25' r='24.89%25' gradientTransform='matrix(-.18738 .97947 -1.25372 -.27758 .951 .449)' id='r'%3e %3cstop stop-color='%239C0600' stop-opacity='.999' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.94' offset='26.692%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='97.063%25' cy='54.555%25' fx='97.063%25' fy='54.555%25' r='15.021%25' gradientTransform='matrix(.8002 .50886 -.59365 1.08039 .518 -.538)' id='s'%3e %3cstop stop-color='%23C71C08' stop-opacity='.75' offset='0%25'/%3e %3cstop stop-color='%23C71C08' stop-opacity='.704' offset='53.056%25'/%3e %3cstop stop-color='%23C71C08' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='4.056%25' cy='24.23%25' fx='4.056%25' fy='24.23%25' r='13.05%25' gradientTransform='matrix(.8728 -.3441 .41218 1.20997 -.095 -.037)' id='t'%3e %3cstop stop-color='%239C0600' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.473' offset='31.614%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='74.586%25' cy='77.013%25' fx='74.586%25' fy='77.013%25' r='17.563%25' gradientTransform='matrix(.77041 .55955 -.56333 .89765 .605 -.339)' id='u'%3e %3cstop stop-color='%239C0600' stop-opacity='.999' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.934' offset='45.7%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.803' offset='59.211%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50.001%25' cy='50%25' fx='50.001%25' fy='50%25' r='51.087%25' gradientTransform='matrix(-.3809 .91219 -.97139 -.46943 1.176 .279)' id='v'%3e %3cstop stop-color='%23C71C08' stop-opacity='0' offset='0%25'/%3e %3cstop stop-color='%23C71C08' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='2.243%25' cy='4.089%25' fx='2.243%25' fy='4.089%25' r='122.873%25' gradientTransform='scale(.78523 1) rotate(36.406 .025 .05)' id='x'%3e %3cstop stop-color='%23EDA83A' offset='0%25'/%3e %3cstop stop-color='%23FFDC5E' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='100%25' cy='7.011%25' fx='100%25' fy='7.011%25' r='105.039%25' gradientTransform='scale(-.90713 -1) rotate(-45.799 -.217 2.489)' id='z'%3e %3cstop stop-color='%23F4B248' offset='0%25'/%3e %3cstop stop-color='%23FFDD5F' offset='100%25'/%3e %3c/radialGradient%3e %3clinearGradient x1='50%25' y1='95.035%25' x2='50%25' y2='7.417%25' id='b'%3e %3cstop stop-color='%23F28A2D' offset='0%25'/%3e %3cstop stop-color='%23FDE86F' offset='100%25'/%3e %3c/linearGradient%3e %3clinearGradient x1='49.985%25' y1='-40.061%25' x2='49.985%25' y2='111.909%25' id='i'%3e %3cstop stop-color='%23482314' offset='0%25'/%3e %3cstop stop-color='%239A4111' offset='100%25'/%3e %3c/linearGradient%3e %3clinearGradient x1='52.727%25' y1='31.334%25' x2='28.964%25' y2='102.251%25' id='o'%3e %3cstop stop-color='%23F34462' offset='0%25'/%3e %3cstop stop-color='%23CC0820' offset='100%25'/%3e %3c/linearGradient%3e %3cpath d='M180 90c0 49.71-40.29 90-90 90S0 139.71 0 90 40.29 0 90 0s90 40.29 90 90z' id='a'/%3e %3cpath d='M108.947 95.828c-23.47-7.285-31.71 8.844-31.71 8.844s2.376-17.954-21.095-25.24c-22.57-7.004-36.253 13.757-37.307 26.812-2.264 28.103 22.134 59.996 31.26 70.86a8.062 8.062 0 008.34 2.584c13.697-3.777 51.904-16.242 66.009-40.667 6.54-11.328 7.06-36.188-15.497-43.193z' id='n'/%3e %3cpath d='M180.642 90c0 49.71-40.289 90-90 90-49.71 0-90-40.29-90-90s40.29-90 90-90c49.711 0 90 40.29 90 90z' id='w'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg fill-rule='nonzero'%3e %3cg transform='translate(.005 -.004)'%3e %3cuse fill='url(%23b)' xlink:href='%23a'/%3e %3cuse fill='url(%23c)' xlink:href='%23a'/%3e %3cuse fill='url(%23d)' xlink:href='%23a'/%3e %3cuse fill='url(%23e)' xlink:href='%23a'/%3e %3cuse fill='url(%23f)' xlink:href='%23a'/%3e %3cuse fill='url(%23g)' xlink:href='%23a'/%3e %3cuse fill='url(%23h)' xlink:href='%23a'/%3e %3c/g%3e %3cpath d='M109.013 66.234c-1.14-3.051-36.872-3.051-38.011 0-1.322 3.558 6.806 8.396 19.012 8.255 12.192.14 20.306-4.71 18.999-8.255z' fill='url(%23i)' transform='translate(.005 -.004)'/%3e %3cpath d='M68.006 46.125c.014 7.566-4.823 9.788-11.995 10.702-7.102 1.068-11.883-2.068-11.995-10.702-.099-7.256 3.81-16.116 11.995-16.284 8.17.168 11.981 9.028 11.995 16.284z' fill='url(%23j)' transform='translate(.005 -.004)'/%3e %3cpath d='M54.807 35.054c1.18 1.378.97 3.769-.479 5.358-1.448 1.575-3.571 1.744-4.753.366-1.181-1.378-.97-3.77.478-5.344 1.449-1.59 3.572-1.744 4.754-.38z' fill='%234E506A'/%3e %3cpath d='M112.022 46.125c-.014 7.566 4.823 9.788 11.995 10.702 7.102 1.068 11.883-2.068 11.995-10.702.099-7.256-3.81-16.116-11.995-16.284-8.184.168-11.995 9.028-11.995 16.284z' fill='url(%23k)' transform='translate(.005 -.004)'/%3e %3cpath d='M124.078 34.52c.957 1.547.38 3.881-1.293 5.217-1.674 1.336-3.797 1.181-4.753-.366-.957-1.546-.38-3.88 1.293-5.217 1.66-1.336 3.797-1.181 4.753.366z' fill='%234E506A'/%3e %3cpath d='M37.969 23.344c-2.349 1.983-.45 6.047 3.515 4.19 6.328-2.967 19.899-6.623 31.824-5.287 3.164.351 4.19-.113 3.487-4.022-.689-3.853-4.33-6.37-13.387-5.26-14.035 1.716-23.09 8.396-25.44 10.379z' fill='url(%23l)' transform='translate(.005 -.004)'/%3e %3cpath d='M116.592 12.952c-9.056-1.111-12.698 1.42-13.387 5.259-.703 3.91.323 4.373 3.487 4.022 11.925-1.336 25.481 2.32 31.824 5.287 3.965 1.857 5.864-2.207 3.515-4.19-2.348-1.97-11.404-8.649-25.439-10.378z' fill='url(%23m)' transform='translate(.005 -.004)'/%3e %3c/g%3e %3cg fill-rule='nonzero'%3e %3cuse fill='url(%23o)' xlink:href='%23n'/%3e %3cuse fill='url(%23p)' xlink:href='%23n'/%3e %3cuse fill='url(%23q)' xlink:href='%23n'/%3e %3cuse fill='url(%23r)' xlink:href='%23n'/%3e %3cuse fill='url(%23s)' xlink:href='%23n'/%3e %3cuse fill='url(%23t)' xlink:href='%23n'/%3e %3cuse fill='url(%23u)' xlink:href='%23n'/%3e %3cuse fill-opacity='.5' fill='url(%23v)' xlink:href='%23n'/%3e %3c/g%3e %3cg transform='translate(-.637 -.004)'%3e %3cmask id='y' fill='white'%3e %3cuse xlink:href='%23w'/%3e %3c/mask%3e %3cpath d='M15.52 86.231C9.642 80.508-.708 77.892-1.89 91.153c-.927 10.364 3.93 27.694 16.234 37.763C45.282 154.23 74.742 139.667 75.628 122c.699-13.932-15.502-12.327-20.648-12.045-.352.014-.507-.45-.197-.647a48.147 48.147 0 004.725-3.488c4.036-3.403 1.968-9.31-3.67-7.607-.858.253-14.583 4.359-23.288 1.068-9.872-3.726-11.053-7.214-17.03-13.05z' fill='url(%23x)' fill-rule='nonzero' mask='url(%23y)'/%3e %3cpath d='M161.081 88.2c3.502-6.778 9.066-4.401 12.194-3.359 4.61 1.537 7.353 4.4 7.353 11.572 0 17.001-2.812 32.765-17.002 48.6-25.987 28.982-69.935 25.143-73.675 6.862-3.094-15.16 13.066-16.678 18.34-17.381.365-.042.421-.605.098-.746a46.169 46.169 0 01-5.4-2.896c-5.444-3.403-3.989-10.051 2.405-9.07 6.806 1.012 15.23 2.924 22.486 2.207 21.009-2.11 24.975-19.87 33.201-35.789z' fill='url(%23z)' fill-rule='nonzero' mask='url(%23y)'/%3e %3c/g%3e %3c/g%3e %3c/svg%3e"
                        alt="" width="18" height="18" />
                </span>
                <span class="rounded-full grid place-items-center text-2xl -ml-1">
                    <img class="align-top"
                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e"
                        alt="" width="18" height="18" />
                </span>
                <span class="rounded-full grid place-items-center text-2xl -ml-1">
                    <img class="align-top"
                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                        alt="" width="18" height="18" />
                </span>
            </div>
            <div class="text-gray-500 dark:text-dark-txt">
                <span>{comments.length} Comments</span>
                <span>{share} Shares</span>
            </div>
        </div>
    </div>

    <div class="py-2 px-4">
        <div class="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
            <div class="flex space-x-2">
                <div
                    class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                    <i class="custom2 filter-gray v3 like"></i>
                    <span class="text-sm font-semibold">Like</span>
                </div>
                <div
                    class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                    <i class="custom2 filter-gray v3 comment"></i>
                    <span class="text-sm font-semibold">Comment</span>
                </div>
                <div
                    class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                    <i class="custom2 filter-gray v3 share"></i>
                    <span class="text-sm font-semibold">Shares</span>
                </div>
            </div>
        </div>
    </div>

    <div class="py-2 px-4">
        {#each comments as comment}
            <Comment {...comment} {thisDisplayName} {thisPhotoURL} postId={id} {comments} />
        {/each}
    </div>

    <div class="py-2 px-4">
        <div class="flex space-x-2">
            <img src={thisPhotoURL} alt="" class="w-9 h-9 rounded-full">
            <div class="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
                <form on:submit|preventDefault={addComment}>
                    <input type="text" placeholder="Write a comment..." class="outline-none bg-transparent flex-1" bind:value={newComment.content}>
                </form>
                <div class="flex space-x-0 items-center justify-center">
                    <span class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer dark:text-dark-txt dark:hover:bg-dark-second text-xl"><i class='custom3 filter-gray v4 smile'></i></span>
                    <span class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer dark:text-dark-txt  dark:hover:bg-dark-second text-xl"><i class='custom3 filter-gray v4 camera' ></i></span>
                    <span class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer dark:text-dark-txt  dark:hover:bg-dark-second text-xl"><i class='custom3 filter-gray v4 gif' ></i></span>
                    <span class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer dark:text-dark-txt  dark:hover:bg-dark-second text-xl"><i class='custom3 filter-gray v4 sticker' ></i></span>
                </div>
            </div>
        </div>
    </div>
</div>