(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1_6W4",SearchForm:"Searchbar_SearchForm__2IWo6",SearchForm__button:"Searchbar_SearchForm__button__jJi-C",SearchForm__buttonLabel:"Searchbar_SearchForm__buttonLabel__3__Zf",SearchForm__input:"Searchbar_SearchForm__input__1O_5L"}},16:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__Ahg3w",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__3qLE5"}},17:function(e,t,a){e.exports={Overlay:"Modal_Overlay__CK2nX",Modal:"Modal_Modal__2Q2gT"}},29:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3RA_x"}},30:function(e,t,a){e.exports={Button:"Button_Button__3_f8k"}},32:function(e,t,a){e.exports={Loader:"Loader_Loader__37WZJ"}},37:function(e,t,a){},39:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(14),s=a.n(o),c=(a(37),a(19)),i=a(4),u=a.n(i),l=a(9),h=a(5),m=a(6),g=a(8),p=a(7),b=(a(39),a(28)),d=a.n(b),f=a(10),j=a.n(f),_=a(0),v=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.onChange=function(t){e.setState({value:t.target.value})},e.handleSearchSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value)},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("header",{className:j.a.Searchbar,children:Object(_.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSearchSubmit,children:[Object(_.jsx)("button",{type:"submit",className:j.a.SearchForm__button,children:Object(_.jsx)("span",{className:j.a.SearchForm__buttonLabel,children:"Search"})}),Object(_.jsx)("input",{value:this.state.value,onChange:this.onChange,className:j.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})}}]),a}(n.Component),y=a(29),O=a.n(y);function S(e){var t=e.children;return Object(_.jsx)("ul",{className:O.a.ImageGallery,children:t})}var x=a(16),w=a.n(x);function I(e){var t=e.img,a=e.showImage;return Object(_.jsx)("li",{onClick:function(){return a(t)},className:w.a.ImageGalleryItem,children:Object(_.jsx)("img",{src:t.webformatURL,alt:t.tags,className:w.a.ImageGalleryItem__image})})}var k=a(30),L=a.n(k);function M(e){var t=e.onClick;return Object(_.jsx)("button",{className:L.a.Button,onClick:t,type:"button",children:"Load more"})}var C=a(31),F=a.n(C),N=(a(69),a(32)),G=a.n(N),q=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(_.jsx)(F.a,{className:G.a.Loader,type:"Hearts",color:"#3f51b5",height:80,width:80})}}]),a}(r.a.Component),D=a(17),B=a.n(D),A=document.querySelector("#modal-root"),E=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"!==t.code&&t.currentTarget!==t.target||e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.image;return Object(o.createPortal)(Object(_.jsx)("div",{className:B.a.Overlay,onClick:this.handleKeyDown,children:Object(_.jsx)("div",{className:B.a.Modal,children:Object(_.jsx)("img",{src:e.src,alt:e.alt})})}),A)}}]),a}(n.Component),K=a(18),P=a.n(K);P.a.defaults.baseURL="https://pixabay.com/api/";var U=function(){var e=Object(l.a)(u.a.mark((function e(t,a){var n,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?q=".concat(t,"&page=").concat(a,"&key=").concat("23491087-4191226b82b28486631b9987a","&image_type=photo&orientation=horizontal&per_page=").concat(12),e.next=3,P.a.get(n);case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),J=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={page:1,query:"",images:[],isLoading:!1,error:null,showModal:!1,bigImg:{},maxPage:1},e.handleSubmit=function(t){e.setState({query:t})},e.toggleModal=function(){e.setState({showModal:!e.state.showModal})},e.handleButton=function(){e.setState((function(e){return{page:e.page+1}})),e.setState({isLoading:!0})},e.showImage=function(t){e.toggleModal(),e.setState({bigImg:{src:t.largeImageURL,alt:t.tags}})},e}return Object(m.a)(a,[{key:"setImages",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n,r,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.state,a=t.page,n=t.query,e.next=4,U(n,a);case 4:r=e.sent,o=r.hits,s=Math.ceil(r.total/o.length),isNaN(s)?this.setState({maxPage:0}):this.setState({maxPage:s}),this.setState({images:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),this.setState({error:e.t0});case 14:return e.prev=14,this.setState({isLoading:!1}),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"loadMore",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.state,a=t.page,n=t.query,e.next=4,U(n,a);case 4:r=e.sent,o=r.hits,this.setState((function(e){return{images:[].concat(Object(c.a)(e.images),Object(c.a)(o.map((function(e){return e}))))}})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.setState({error:e.t0});case 12:return e.prev=12,this.setState({isLoading:!1}),e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0}),this.setImages();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){this.state.query!==t.query&&this.setImages(),this.state.page!==t.page&&this.loadMore()}},{key:"render",value:function(){var e=this;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(v,{onSubmit:this.handleSubmit}),this.state.images.length>0&&Object(_.jsxs)(S,{showImage:this.showImage,children:[this.state.images.map((function(t){return Object(_.jsx)(I,{img:t,showImage:e.showImage},d.a.generate())})),this.state.showModal&&Object(_.jsx)(E,{onClose:this.toggleModal,image:this.state.bigImg})]}),this.state.isLoading&&Object(_.jsx)(q,{}),this.state.maxPage>this.state.page&&this.state.images.length>0&&Object(_.jsx)(M,{onClick:this.handleButton})]})}}]),a}(n.Component);s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(J,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.b82087c0.chunk.js.map