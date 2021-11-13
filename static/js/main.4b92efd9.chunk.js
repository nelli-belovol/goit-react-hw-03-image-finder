(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{31:function(e,t,a){},33:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(13),c=a.n(s),i=(a(31),a(26)),o=a(4),u=a.n(o),l=a(9),h=a(5),m=a(6),g=a(8),d=a(7),p=(a(33),a(0)),b=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.onChange=function(t){e.setState({value:t.target.value})},e.handleSearchSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value)},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSearchSubmit,children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{value:this.state.value,onChange:this.onChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})}}]),a}(n.Component);function j(e){var t=e.children;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("ul",{className:"ImageGallery",children:t})})}var f=a(24),v=a.n(f);function O(e){var t=e.images,a=e.showImage;return Object(p.jsx)(p.Fragment,{children:t.map((function(e){return Object(p.jsx)("li",{onClick:function(){return a(e)},className:"ImageGalleryItem",children:Object(p.jsx)("img",{"data-id":e.id,"data-largeimg":e.largeImageURL,src:e.webformatURL,alt:e.tags,className:"ImageGalleryItem-image"})},v.a.generate())}))})}function y(e){var t=e.onClick;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("button",{className:"Button",onClick:t,type:"button",children:"Load more"})})}var x=a(25),w=a.n(x),S=(a(63),function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(p.jsx)(w.a,{className:"Loader",type:"Hearts",color:"#3f51b5",height:80,width:80})}}]),a}(r.a.Component)),k=document.querySelector("#modal-root"),I=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"!==t.code&&t.currentTarget!==t.target||e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.image;return Object(s.createPortal)(Object(p.jsx)("div",{className:"Overlay",onClick:this.handleKeyDown,children:Object(p.jsx)("div",{className:"Modal",children:Object(p.jsx)("img",{src:e.src,alt:e.alt})})}),k)}}]),a}(n.Component),L=a(15),C=a.n(L);C.a.defaults.baseURL="https://pixabay.com/api/";var M=function(){var e=Object(l.a)(u.a.mark((function e(t,a){var n,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?q=".concat(t,"&page=").concat(a,"&key=").concat("23491087-4191226b82b28486631b9987a","&image_type=photo&orientation=horizontal&per_page=").concat(12),e.next=3,C.a.get(n);case 3:return r=e.sent,s=r.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),N=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={page:1,query:"",images:[],isLoading:!1,error:null,showModal:!1,bigImg:{},maxPage:1},e.handleSubmit=function(t){e.setState({query:t})},e.toggleModal=function(){e.setState({showModal:!e.state.showModal})},e.handleButton=function(){e.setState((function(e){return{page:e.page+1}})),e.setState({isLoading:!0})},e.showImage=function(t){e.toggleModal(),e.setState({bigImg:{src:t.largeImageURL,alt:t.tags}})},e}return Object(m.a)(a,[{key:"setImages",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n,r,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.state,a=t.page,n=t.query,e.next=4,M(n,a);case 4:r=e.sent,s=r.hits,c=Math.ceil(r.total/s.length),isNaN(c)?this.setState({maxPage:0}):this.setState({maxPage:c}),this.setState({images:s}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),this.setState({error:e.t0});case 14:return e.prev=14,this.setState({isLoading:!1}),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"loadMore",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n,r,s=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.state,a=t.page,n=t.query,e.next=4,M(n,a);case 4:r=e.sent,r.hits.map((function(e){return s.setState((function(t){return{images:[].concat(Object(i.a)(t.images),[{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}])}}))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.setState({error:e.t0});case 12:return e.prev=12,this.setState({isLoading:!1}),e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0}),this.setImages();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){this.state.query!==t.query&&this.setImages(),this.state.page!==t.page&&this.loadMore()}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b,{onSubmit:this.handleSubmit}),this.state.images.length>0&&Object(p.jsxs)(j,{children:[Object(p.jsx)(O,{showImage:this.showImage,images:this.state.images}),this.state.showModal&&Object(p.jsx)(I,{onClose:this.toggleModal,image:this.state.bigImg})]}),this.state.isLoading&&Object(p.jsx)(S,{}),this.state.maxPage>this.state.page&&this.state.images.length>0&&Object(p.jsx)(y,{onClick:this.handleButton})]})}}]),a}(n.Component);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.4b92efd9.chunk.js.map