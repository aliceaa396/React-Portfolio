import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, IconButton, CardText, Button } from 'react-mdl'

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
       activeTab: 0
    }
  }
  
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
            <Card classname="projects-card" shadow={5} 
              style={{
                minWidth:'450', 
                margin:'10px',
                marginBottom: "15px",
                maxHeight: "auto"
              }}>
              <CardTitle 
              style={{
                color: '#fff', 
                height: '176px', 
                background:'url(https://i.ibb.co/T1BdnS4/llr.png) center/cover'
              }}
              >
                Fitpad
              </CardTitle>
              <CardText> 
                Developed, tested and designed a Full-Stack application to effortlessly keep track of your weight lifting sessions. The homepage lists the users previously logged exercises. The add a workout page allows users to select a muscle from a drop-down menu which filters the exercises shown on another drop-down menu below it. The technologies used to build this application include React, JSON, Node, PostgreSQL, Express, and CSS.
              </CardText>
              <CardActions border>
                 <a href="https://gist.github.com/aliceaa396/8635a80457835309a1827c9fe8e9d46e#file-capstone-i-fitpad" target="_blank"><Button colored > GitHub </Button></a>
                 <a href="https://fitpad.now.sh/" target="_blank"><Button colored > Live Demo </Button></a>
              </CardActions>
              <CardMenu style={{
                color: '#fff'
              }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          
          {/* Project 2 */}

          <Card classname="projects-card" shadow={5} 
            style={{
              minWidth:'450', 
              margin:'10px',
              marginBottom: "15px",
              
            }}>
              <CardTitle 
                style={{
                  color: '#fff',
                  height: '176px', 
                  background:'url(https://i.ibb.co/7GhKfQ0/ssr.png) black center/cover'
                }}>
                 Spanish Spaced Repitition
              </CardTitle>
              <CardText> 
                Designed, developed and tested a Full-Stack application that utilizes spaced repetition to teach users a new language. The user homepage features flashcards with the words a user will be tested on, as well as a link to the quiz. The technologies used to build this application include React, CSS, Node, as well as PostgreSQL. 
              </CardText>
              <CardActions border>
                <a href="https://gist.github.com/aliceaa396/1e9dda5488c45506a1555d4ef3f21134" target="_blank"><Button colored > GitHub </Button></a>
                <a href="https://spaced-repetition-ten.now.sh/" target="_blank"><Button colored > Live Demo </Button></a>
              </CardActions>
              <CardMenu 
                style={{
                  color: '#fff'
                }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card classname="projects-card" shadow={5} 
              style={{
                minWidth:'450', 
                margin:'10px',
                marginBottom: "15px",
                maxHeight: "auto"
              }}>
              <CardTitle 
                style={{
                  color: '#fff',
                  height: '176px', 
                  background:'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center/cover'
                }}>   
                SuperHumans 
              </CardTitle>
              <CardText> 
                Developed and designed this application to allow users to be able to search for their favorite superhero or supervillain. The application displays interesting facts about the superhuman searched for. The technologies utilized to create this application include React, CSS and REST API's.
              </CardText>
              <CardActions border>
                <a href="https://github.com/aliceaa396/SuperHumans-API" target="_blank"><Button colored > GitHub </Button></a>
                <a href="https://superhumans-app.ala31996.now.sh/" target="_blank"> <Button colored > Live Demo </Button> </a>
              </CardActions>
              <CardMenu style={{
                color: '#fff'
              }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 4 */}
            <Card classname="projects-card" shadow={5} 
              style={{
                minWidth:'450', 
                margin:'10px',
                marginBottom: "15px",
                maxHeight: "auto"
              }}>
              <CardTitle 
                style={{
                  color: '#fff', 
                  height: '176px', 
                  background:'url(https://i.ibb.co/DWDdv6p/Untitled.png) center/cover'
              }}>
                Frenmo
              </CardTitle>
              <CardText> 
                Acted as project manager on a team of five developers led by one senior developer. Contributed to the development of the front-end of this Full-Stack application which allows users to send virtual coupons to friends and family. The technologies used to build this application include React, Sass, Node, as well as PostgreSQL.
              </CardText>
              <CardActions border>
                <a href="https://gist.github.com/aliceaa396/9bc42fbfbb49f381e0314b9e0a8df4fe" target="_blank"><Button colored > GitHub </Button></a>
                <a href="https://frenmo.now.sh/login" target="_blank"><Button colored > Live Demo </Button></a>
              </CardActions>
              <CardMenu style={{
                color: 'black'
              }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
        </div>
        
        
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          
            <Card classname="projects-card" shadow={5} 
              style={{
                minWidth:'450', 
                margin:'10px',
                marginBottom: "15px",
                maxHeight: "auto"
              }}>
              <CardTitle 
                style={{
                  color: '#fff',
                  height: '176px', 
                  background:'url(https://i.ibb.co/mCKMZRr/sharkmarks-SS.png) center/cover'
                }}
              >
                Sharkmarks 
              </CardTitle>
              <CardText> 
                Designed and developed a bookmarking application that keeps track of your favorite websites.Tech:  jQuery, HTML, CSS, REST API.
              </CardText>
              <CardActions border>
                <a href="https://github.com/thinkful-ei-iguana/Angel_Bookmarks_App" target="_blank"><Button colored > GitHub </Button></a>
                <a href="https://thinkful-ei-iguana.github.io/Angel_Bookmarks_App/" target="_blank"><Button colored > Live Demo </Button></a>
              </CardActions>
              <CardMenu 
                style={{
                  height:"176px", 
                  color: '#fff',
                  marginBottom: "15px"
                }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
        
            <Card classname="projects-card" shadow={5} 
              style={{
                minWidth:'450', 
                margin:'10px',
                marginBottom: "15px",
                maxHeight: "auto"
              }}>
              <CardTitle 
                style={{
                  color: '#fff', 
                  height: '176px', 
                  background:'url(https://i.ibb.co/KGvGWYT/matrixquiz-SS.png) center/cover'
              }}>
                Matrix Quiz 
              </CardTitle>
              <CardText> 
                Built a quiz application to test a user’s knowledge of the Matrix Films. Tech:  jQuery, HTML, CSS, REST API.  
              </CardText>
              <CardActions border>
                <a href="https://github.com/aliceaa396/Mason_Angel_Quiz_App" target="_blank"><Button colored > GitHub </Button></a>
                <a href="https://thinkful-ei-iguana.github.io/Mason_Angel_Quiz_App/" target="_blank"><Button colored > Live Demo </Button></a>
              </CardActions>
              <CardMenu 
                style={{
                  height:"176px",
                  color: '#fff'
                }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
        
        </div>
      )
    }
  }
  

  render() {
    return (
      <div className="category-tabs">
        <Tabs 
          activeTab={this.state.activeTab} 
          onChange={(tabId) => this.setState({activeTab: tabId})} 
          ripple
          style={{margin: "10px"}}
        >
          <Tab style={{color:"#fff"}}> React </Tab>
            
          <Tab style={{color:"#fff"}}> jQuery </Tab>
        </Tabs>
          
            <Grid style={{width: "auto"}}>
              <Cell col={12}
                style={{
                  display: "flex", 
                  justifyContent:"center",
                  
                }}>
                <div className="content">
                  {this.toggleCategories()}  
                </div>
              </Cell>
            </Grid>
          
      </div>
    )
  }
}
