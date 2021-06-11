import React, {Component} from 'react';

class Subject extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.onChangePage();
    console.log("function",this); //bind를 하지 않으면 function 안쪽에 this 는 undefined
            //그래서 bind(this)를 통해서 componet 속성을 물려준다
//             //생활코딩 16.4
//             render() 메서드 밖에서 ES6의 화살표 함수로 이벤트 함수를 만들어 넘겨주면 .bind 없이 this를 사용할 수 있습니다.
// handleClick = (e) => {
//     console.log(e);
//     e.preventDefault();
//     this.setState({
//       mode: 'welcome'
//     });
//   }

// render() {
//   ...
//   return(
//     <h1><a href="/" onClick={this.handleClick}>{this.state.subject.title}</a></h1>
//     {this.state.subject.sub}
//   );
// }

// 참고: https://blueshw.github.io/2017/07/01/arrow-function/
  }  
  render() {
      console.log("Subject render");//this : componet 자신
      return (
        <header>
          <h1>
            <a href="/" onClick={this.handleClick}>
            {this.props.title}
            </a>
          </h1>
          {this.props.sub}
        </header>
      )
    }
  }

  export default Subject;