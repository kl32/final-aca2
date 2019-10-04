import React, { Component } from "react";
import { Text, Tabs, Panel, Box } from "@bigcommerce/big-design";
import Search from "./search";
import ParagraphTextLeft from "./paragraphtextleft";
import ParagraphTextRight from "./paragraphtextright";



class HomeTabs extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            activeTab: false
        };
      }

      openTab = () => {
        this.setState({ activeTab: true });
      };


    render() {   
        return(
            <>   
            <Tabs onTabClick={this.openTab} activeTab={this.state.activeTab}>
                <Tabs.Tab id="tab1">Info</Tabs.Tab>
                <Tabs.Tab id="tab2">Search</Tabs.Tab>
            </Tabs>
              <Box marginTop="large">
                {this.activeTab === 'tab1' && 
                <div>
                <Panel>
                  <Text>
                    <div class="paragraph-container">
                      <ParagraphTextLeft
                        image="undraw_hiking_d24r.png"
                        alt="image"
                        title="title here"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      />
                    </div>
                  </Text>
                </Panel>
                <Panel>
                  <Text>
                    <div class="paragraph-container">
                      <ParagraphTextRight
                        image="undraw_hiking_d24r.png"
                        alt="image"
                        title="title here"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      />
                    </div>
                  </Text>
                </Panel>
                <Panel>
                  <Text>
                    <div class="paragraph-container">
                      <ParagraphTextLeft
                        image="undraw_hiking_d24r.png"
                        alt="image"
                        title="title here"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      />
                    </div>
                  </Text>
                </Panel>
                <Panel>
                  <Text>
                    <div class="paragraph-container">
                      <ParagraphTextRight
                        image="undraw_hiking_d24r.png"
                        alt="image"
                        title="title here"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      />
                    </div>
                  </Text>
                </Panel></div>}
        
                {this.activeTab === 'tab2' && <Text><Search /> </Text>}
              </Box>
            </>
          );
        }
    }





export default HomeTabs;

