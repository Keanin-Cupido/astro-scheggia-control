import React from 'react';
import './RollerSpeedController.css';

const RollerSpeedController = () => {
  const allButtons = document.querySelectorAll('button');

  allButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('ui__changable')) {
                button.classList.toggle('button--selected');
            }
        });
  });

  return (
    <div class="rollerspeedcontroller__container">
      <div class="rollerspeedcontroller--top">
        <div id="switch_01" class="rollerspeedcontroller__switch--container">
          <span class="rollerspeedcontroller__switch"></span>
        </div>
        <div id="switch_02" class="rollerspeedcontroller__switch--container">
          <span class="rollerspeedcontroller__switch"></span>
        </div>
        <div id="switch_03" class="rollerspeedcontroller__switch--container">
          <span class="rollerspeedcontroller__switch"></span>
        </div>
        <div id="switch_04" class="rollerspeedcontroller__switch--container">
          <span class="rollerspeedcontroller__switch"></span>
        </div>
        <div id="switch_05" class="rollerspeedcontroller__switch--container">
          <span class="rollerspeedcontroller__switch"></span>
        </div>
        <div id="switch_06" class="rollerspeedcontroller__switch--container">
          <span class="rollerspeedcontroller__switch"></span>
        </div>
        <div id="switch_07" class="rollerspeedcontroller__switch--container">
          <span class="rollerspeedcontroller__switch"></span>
        </div>
        <div id="switch_08" class="rollerspeedcontroller__switch--container">
          <span class="rollerspeedcontroller__switch"></span>
        </div>
      </div>
      <div class="rollerspeedcontroller--bottom">
        <div id="btn_01" class="rollerspeedcontroller__btn--container">
          <button class="rollerspeedcontroller__btn ui__changable">50</button>
        </div>
        <div id="btn_02" class="rollerspeedcontroller__btn--container">
          <button class="rollerspeedcontroller__btn ui__changable">60</button>
        </div>
        <div id="btn_03" class="rollerspeedcontroller__btn--container">
          <button class="rollerspeedcontroller__btn ui__changable">70</button>
        </div>
        <div id="btn_04" class="rollerspeedcontroller__btn--container">
          <button class="rollerspeedcontroller__btn ui__changable">80</button>
        </div>
        <div id="btn_05" class="rollerspeedcontroller__btn--container">
          <button class="rollerspeedcontroller__btn ui__changable">90</button>
        </div>
        <div id="btn_06" class="rollerspeedcontroller__btn--container">
          <button class="rollerspeedcontroller__btn ui__changable">100</button>
        </div>
        <div id="btn_07" class="rollerspeedcontroller__btn--container">
          <button class="rollerspeedcontroller__btn ui__changable">110</button>
        </div>
        <div id="btn_08" class="rollerspeedcontroller__btn--container">
          <button class="rollerspeedcontroller__btn ui__changable">120</button>
        </div>
      </div>
    </div>
  )
}

export default RollerSpeedController;