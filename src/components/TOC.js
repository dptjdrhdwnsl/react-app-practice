import React, {Component} from 'react';

class TOC extends Component {
    render() {
      console.log("TOC render");
      var lists = [];  
      var data = this.props.data
      var i = 0;
      //key = React 내부적으로필요함
      
      while(i < data.length){
        lists.push(
            <li key={data[i].id}>
              <a 
                href={"/content/"+data[i].id}
                data-id={data[i].id} //data 속성값을 주지 않고 bind(this,x) 인자로 받고 아래 function에서
                //매개변수로 받아도 사용가능
                onClick={function(e){
                    //debugger;//e의 값 보기
                    //속성의 data-x를 넣으면 target 하위에 있는 dataset에서 x값 확인 가능
                    e.preventDefault();
                    //setState를 통해서 수정
                    //this.state.mode = 'welcome'; 이런 방식으로는 안 됌
                    // this.setState({
                    //     mode: 'welcome'
                    // });
                    this.props.onChangePage(e.target.dataset.id);//App.js의 TOC태그 실행
                }.bind(this)}>
                {data[i].title}
              </a>
            </li>);
        i = i + 1;
      }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      )
    }
  }

  export default TOC;