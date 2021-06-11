import React, {Component} from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';

class App extends Component {
  //초기화 담당
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      selected_content_id:1,
      subject:{title:'WEB', sub:'React'},
      welcome:{title:'Welcome',desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperTextMarkup Language.'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
      
    }
  }
  //render() 어떤 HTML을 그릴 것인가 
  //props or state가 바뀌면 화면을 다시 그려줌
  render() {
    console.log("App render");
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc; 
    } else if(this.state.mode === 'read'){
      // while
      // var i = 0;
      // while(i<this.state.contents.length){
      //   var data = this.state.contents[i];
      //   if(data.id === this.state.selected_content_id){
      //     _title = data.title;
      //     _desc = data.desc;
      //     break;
      //   }
      //   i = i+1;
      // }
      
      // for
      // for(var i = 0;i<this.state.contents.length;i++){
      //   var data = this.state.contents[i];
      //   console.log("data "+data.id);
      //   console.log(this.state.selected_content_id);
      //   if(data.id === this.state.selected_content_id){
      //     _title = data.title;
      //     _desc = data.desc;
      //     break;
      //   }
      // }

      // 반복문 미사용 TOC.js에서 onchangePage시에 각 contents id 값 넘겨줌
      let contents = this.state.contents;
      let sel_cont_id = this.state.selected_content_id;
      //위에서 id 를 1,2,3 순으로 썼기 때문에 index 불러오기 위해서 -1
      _title = contents[sel_cont_id-1].title;
      _desc = contents[sel_cont_id-1].desc;
      
    }
    return (
    <div className="App">
      <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}
      >
      </Subject>
      <TOC 
        onChangePage={function(id){
          console.log(id);
          this.setState({
            mode:'read',
            selected_content_id: Number(id)//문자가 넘어 오기때문에 숫자로 변경
          })
        }.bind(this)}
        data={this.state.contents}>
      </TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
    )
  };
}

export default App;

