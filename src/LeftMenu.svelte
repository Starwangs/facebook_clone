<script>
  import { isDark } from './lib/shared/store'
  export let displayName, photoURL

  let expandMenu = false;
  let expandBookmark = false;
  let localDarkness
  const d = new Date()

  isDark.subscribe(darkness => localDarkness = darkness)
</script>

<div class="w-1/5 pt-16 h-full hidden xl:flex flex-col fixed top-0 left-0 overflow-auto {localDarkness ? 'overflow-hover' : 'overflow-hover-dark'}">
  <ul class="pt-4 pl-3">
    <li>
      <a href="#"
        class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src={photoURL} alt="" class="w-10 h-10 rounded-full" />
        <span class="">{displayName}</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/covid.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">โควิด-19: ศูนย์ข้อมูล</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/friend.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">เพื่อน</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/latest.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">ล่าสุด</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/favorite.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">รายการโปรด</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/facebook-pay.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">Facebook Pay</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/marketplace.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">Marketplace</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/messenger.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">Messenger</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/messenger-kid.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">Messenger Kids</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/watch.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">Watch</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/group.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">กลุ่ม</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/helping-centre.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">การช่วยเหลือสำหรับชุมชน</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/adActivities.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">กิจกรรมโฆษณาล่าสุด</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/game.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">เกม</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/proposal.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">ข้อเสนอ</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/memories.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">ความทรงจำ</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/donation-centre.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">โครงการระดมทุน</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/activities.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">งานกิจกรรม</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/adManage.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">ตัวจัดการโฆษณา</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/business-manager.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">ตัวจัดการธุรกิจ</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/achrives.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">ที่บันทึกไว้</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/pages.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">เพจ</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/friend-contact.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">รายชื่อเพื่อน</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/game-video.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">วิดีโอเกี่ยวกับเกม</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/live-video.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">วิดีโอถ่ายทอดสด</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/latest.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">ศูนย์โฆษณา</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandMenu ? 'flex' : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/weather.png" alt="" class="w-10 h-10 rounded-full" />
        <span class="">สภาพอากาศ</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third" on:click={() => expandMenu = !expandMenu}>
        <span class="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
          <i class="bx bxs-chevron-{!expandMenu ? 'down' : 'up'}"/>
        </span>
        <span class="">{!expandMenu ? 'ดูเพิ่มเติม' : 'ดูน้อยลง'}</span>
      </a>
    </li>
    <li class="border-b border-gray-200 dark:border-dark-third m-6" />
  </ul>
  <div class="flex justify-between items-center px-4 h-4 group">
    <span class="font-semibold text-gray-500 text-lg dark:text-dark-txt">ทางลัดของคุณ</span>
    <span
      class="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md hidden group-hover:inline-block">แก้ไข</span>
  </div>

  <ul class="p-4">
    <li>
      <a href="#"
        class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/shortcut-1.png" alt="" class="w-10 h-10 rounded-lg" />
        <span class="">EverWing</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/shortcut-2.png" alt="" class="w-10 h-10 rounded-lg" />
        <span class="">Know Your Friends</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/shortcut-3.png" alt="" class="w-10 h-10 rounded-lg" />
        <span class="">superfinger</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/shortcut-4.png" alt="" class="w-10 h-10 rounded-lg" />
        <span class="">HAHA แคปชันตลก</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/shortcut-5.png" alt="" class="w-10 h-10 rounded-lg" />
        <span class="">นักศึกษา ม.รามคำแหง FC</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandBookmark
          ? 'flex'
          : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/shortcut-6.jpg" alt="" class="w-10 h-10 rounded-lg" />
        <span class="">กลุ่มที่เราจะแกล้งเป็นเชฟในร้านเดียวกัน</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="{expandBookmark
          ? 'flex'
          : 'hidden'} items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
        <img src="static/shortcut-7.jpg" alt="" class="w-10 h-10 rounded-lg" />
        <span class="">Asacamp KUI 19</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third" on:click={() => expandBookmark = !expandBookmark}>
        <span class="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
          <i class="bx bxs-chevron-{!expandBookmark ? 'down' : 'up'}" />
        </span>
        <span class="">{!expandBookmark ? 'ดูเพิ่มเติม' : 'ดูน้อยลง'}</span>
      </a>
    </li>
  </ul>

  <div class="mt-auto px-6 py-3 text-sm text-gray-500 dark:text-dark-txt">
    <a href="#">Privacy</a>
    <span>.</span>
    <a href="#">Terms</a>
    <span>.</span>
    <a href="#">Advertisting</a>
    <span>.</span>
    <a href="#">Cookies</a>
    <span>.</span>
    <a href="#">Ad choices</a>
    <span>.</span>
    <a href="#">More</a>
    <span>.</span>
    <span>Facebook &COPY; {d.getFullYear()}</span>
  </div>
</div>