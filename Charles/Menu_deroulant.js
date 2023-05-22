function Menu(){

    const menuButtons = document.querySelectorAll('.menu-button1');

menuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const submenu = button.nextElementSibling;
    submenu.classList.toggle('active');
  });
});



    return (

<ul class="menu1">
  <li>
    <a href="#" class="menu-button1">Menu 1</a>
    <ul class="submenu1">
      <li><a href="#">Option 1-1</a></li>
      <li><a href="#">Option 1-2</a></li>
      <li><a href="#">Option 1-3</a></li>
    </ul>
  </li>
  <li>
    <a href="#" class="menu-button1">Menu 2</a>
    <ul class="submenu1">
      <li><a href="#">Option 2-1</a></li>
      <li><a href="#">Option 2-2</a></li>
      <li><a href="#">Option 2-3</a></li>
    </ul>
  </li>
  <li>
    <a href="#" class="menu-button1">Menu 3</a>
    <ul class="submenu1">
      <li><a href="#">Option 3-1</a></li>
      <li><a href="#">Option 3-2</a></li>
      <li><a href="#">Option 3-3</a></li>
    </ul>
  </li>
</ul>



    )
}

export default Menu;