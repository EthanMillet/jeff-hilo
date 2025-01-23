<template>
    <div :class="$style.frameParent">
          <div :class="$style.rectangleParent">
                <div :class="$style.frameChild" />
                <div :class="$style.frameItem" />
                <div :class="$style.frameItem" />
                <div :class="$style.frameItem" />
                <div :class="$style.frameItem" />
                <div :class="$style.frameItem" />
          </div>
          <b :class="$style.createAccount">Create Account</b>
          <div :class="$style.nameParent">
                <div :class="$style.name">Name</div>
                <div :class="$style.frameGroup">
                      <div :class="$style.firstWrapper">
                            <div :class="$style.name">First...</div>
                      </div>
                      <div :class="$style.firstWrapper">
                            <div :class="$style.name">Last...</div>
                      </div>
                </div>
          </div>
          <div :class="$style.nameParent">
                <div :class="$style.name">Birthday</div>
                <div :class="$style.frameGroup">
                      <div :class="$style.firstWrapper">
                            <div :class="$style.name">Day...</div>
                      </div>
                      <div :class="$style.firstWrapper">
                            <div :class="$style.name">Month...</div>
                      </div>
                      <div :class="$style.firstWrapper">
                            <div :class="$style.name">Year...</div>
                      </div>
                </div>
          </div>
          <div :class="$style.frameDiv">
                <div :class="$style.locationParent">
                      <div :class="$style.name">Location</div>
                      <div :class="$style.cityStateWrapper">
                            <div :class="$style.name">City, State...</div>
                      </div>
                </div>
                <div :class="$style.locationParent">
                      <div :class="$style.name">Phone</div>
                      <div :class="$style.cityStateWrapper">
                            <div :class="$style.name">Phone number...</div>
                      </div>
                </div>
          </div>
          <div :class="$style.nameParent">
                <div :class="$style.name">Email</div>
                <div :class="$style.cityStateWrapper">
                      <div :class="$style.name">Email...</div>
                </div>
          </div>
          <div :class="$style.nameParent">
                <div :class="$style.name">Password</div>
                <div :class="$style.frameGroup">
                      <div :class="$style.typePasswordParent">
                            <div :class="$style.name">Type password...</div>
                            <img :class="$style.vectorIcon" alt="Password" src="@/assets/eye-icon.svg" @click="showPassword"/>
                      </div>
                      <div :class="$style.typePasswordParent">
                            <div :class="$style.name">Re-type password...</div>
                            <img :class="$style.vectorIcon" alt="Retype-Password" src="@/assets/eye-icon.svg" @click="showPassword"/>
                      </div>
                </div>
          </div>
          <div :class="$style.nameParent">
                <div :class="$style.name">Which best describes your current role?</div>
                      <div :class="$style.chooseOneParent">
                            <div :class="$style.name">Choose one...</div>
                            <img :class="$style.vectorIcon" alt="choose" src="@/assets/dropdown-icon.svg" @click="dropdown"/>
                      </div>
                      </div>
                      <div :class="$style.createAccountWrapper" @click="onFrameContainerClick">
                            <b :class="$style.name">Create Account</b>
                      </div>
                      <div :class="$style.byCreatingAnContainer">
                            <span>By creating an account, I agree to Hilo’s</span>
                            <span :class="$style.privacyPolicy"> Privacy Policy </span>
                            <span>and </span>
                            <span :class="$style.privacyPolicy">Terms of Service.</span>
                      </div>
                      <div :class="$style.frameChild3" />
                      </div>
                      </template>
                      <script lang="ts">
                            import { defineComponent } from 'vue'
                            
                            
                            export default defineComponent({
                                  name: "Frame",
                                  methods: {
                                        onFrameContainerClick() {
                                              // Add your code here
                                        }}})</script><style  scoped>.frameChild {
                                  flex: 1;
                                  position: relative;
                                  border-radius: 100px;
                                  background-color: #3c78ff;
                                  height: 5px;
                            }
                                  .frameItem {
                                        flex: 1;
                                        position: relative;
                                        border-radius: 100px;
                                        background-color: #f5f5f5;
                                        height: 5px;
                                  }
                                  .rectangleParent {
                                        align-self: stretch;
                                        overflow: hidden;
                                        flex-shrink: 0;
                                        display: flex;
                                        flex-direction: row;
                                        align-items: flex-start;
                                        justify-content: flex-start;
                                        gap: 10px;
                                  }
                                  .createAccount {
                                        align-self: stretch;
                                        position: relative;
                                        font-size: 45px;
                                  }
                                  .name {
                                        position: relative;
                                  }
                                  .firstWrapper {
                                        flex: 1;
                                        border-radius: 10px;
                                        background-color: rgba(64, 64, 64, 0.05);
                                        height: 50px;
                                        display: flex;
                                        flex-direction: row;
                                        align-items: center;
                                        justify-content: flex-start;
                                        padding: 20px;
                                        box-sizing: border-box;
                                  }
                                  .frameGroup {
                                        align-self: stretch;
                                        display: flex;
                                        flex-direction: row;
                                        align-items: flex-start;
                                        justify-content: flex-start;
                                        gap: 10px;
                                        color: rgba(64, 64, 64, 0.5);
                                  }
                                  .nameParent {
                                        align-self: stretch;
                                        display: flex;
                                        flex-direction: column;
                                        align-items: flex-start;
                                        justify-content: flex-start;
                                        gap: 10px;
                                  }
                                  .cityStateWrapper {
                                        align-self: stretch;
                                        border-radius: 10px;
                                        background-color: rgba(64, 64, 64, 0.05);
                                        height: 50px;
                                        display: flex;
                                        flex-direction: row;
                                        align-items: center;
                                        justify-content: flex-start;
                                        padding: 20px;
                                        box-sizing: border-box;
                                        color: rgba(64, 64, 64, 0.5);
                                  }
                                  .locationParent {
                                        flex: 1;
                                        display: flex;
                                        flex-direction: column;
                                        align-items: flex-start;
                                        justify-content: flex-start;
                                        gap: 10px;
                                  }
                                  .frameDiv {
                                        align-self: stretch;
                                        display: flex;
                                        flex-direction: row;
                                        align-items: flex-start;
                                        justify-content: flex-start;
                                        gap: 30px;
                                  }
                                  .vectorIcon {
                                        width: 17.2px;
                                        position: relative;
                                        height: 12.5px;
                                  }
                                  .typePasswordParent {
                                        flex: 1;
                                        border-radius: 10px;
                                        background-color: rgba(64, 64, 64, 0.05);
                                        height: 50px;
                                        display: flex;
                                        flex-direction: row;
                                        align-items: center;
                                        justify-content: space-between;
                                        padding: 20px;
                                        box-sizing: border-box;
                                  }
                                  .vectorIcon2 {
                                        width: 13.3px;
                                        position: relative;
                                        height: 7.7px;
                                  }
                                  .chooseOneParent {
                                        align-self: stretch;
                                        border-radius: 10px;
                                        background-color: rgba(64, 64, 64, 0.05);
                                        height: 50px;
                                        display: flex;
                                        flex-direction: row;
                                        align-items: center;
                                        justify-content: space-between;
                                        padding: 20px;
                                        box-sizing: border-box;
                                        color: rgba(64, 64, 64, 0.5);
                                  }
                                  .createAccountWrapper {
                                        align-self: stretch;
                                        border-radius: 10px;
                                        background-color: #3c78ff;
                                        height: 50px;
                                        flex-shrink: 0;
                                        display: flex;
                                        flex-direction: row;
                                        align-items: center;
                                        justify-content: center;
                                        padding: 20px;
                                        box-sizing: border-box;
                                        cursor: pointer;
                                        color: #fff;
                                  }
                                  .privacyPolicy {
                                        color: #3c78ff;
                                  }
                                  .byCreatingAnContainer {
                                        align-self: stretch;
                                        position: relative;
                                        font-size: 15px;
                                        color: rgba(64, 64, 64, 0.75);
                                  }
                                  .frameChild3 {
                                        width: 100px;
                                        position: relative;
                                        background-color: #fff;
                                        height: 100px;
                                        overflow: hidden;
                                        flex-shrink: 0;
                                  }
                                  .frameParent {
                                        height: 100%;
                                        width: 100%;
                                        position: relative;
                                        background-color: #fff;
                                        overflow-y: auto;
                                        flex-shrink: 0;
                                        display: flex;
                                        flex-direction: column;
                                        align-items: center;
                                        justify-content: flex-start;
                                        padding: 75px 150px;
                                        box-sizing: border-box;
                                        gap: 30px;
                                        text-align: left;
                                        font-size: 18px;
                                        color: #404040;
                                        font-family: Helvetica;
                                  }
                            
                            </style>