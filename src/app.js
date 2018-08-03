import 'bootstrap';
export class App {
  constructor() {
    this.message = 'Hello User';
    this.message1 = 'Have Fun';
  }
  configureRouter(config, router){
    this.router = router
    config.title = "Fun App"
    config.map([{route:['','Home'],name:'Home', moduleId:"home", title:'Home'},
    {route:'About Me',name:'AboutMe', moduleId:"About Me", title:'About Me'},
    {route:'ContactUs',name:'ContactUs', moduleId:"ContactUs", title:'Contact Us'}
  ]);
  }
  aboutmeClick(){
this.router.navigateToRoute('AboutMe')
  }
  ContactUs(){
this.router.navigateToRoute('ContactUs')
  }
}
