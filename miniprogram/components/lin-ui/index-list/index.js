import nodeUtil from"../core/utils/node-util";import dataUtil from"../core/utils/data-util";import eventUtil from"../core/utils/event-util";import pixelUtil from"../core/utils/pixel-util";const defaultSidebarData=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];Component({externalClasses:["l-tip-class","l-tip-text-class","l-sidebar-class","l-selected-class","l-unselected-class","l-sidebar-item-class"],relations:{"../index-anchor/index":{type:"child"}},options:{multipleSlots:!0,pureDataPattern:/^_/},lifetimes:{attached(){this.init()}},properties:{isStick:{type:Boolean,value:!1},scrollTop:{type:Number,value:0},sidebarData:{type:Array,value:defaultSidebarData},showSidebar:{type:Boolean,value:!0},stickOffsetTop:{type:Number,value:0}},data:{_sidebar:{top:0,height:0,sidebarItemCenterPoints:[],isMoving:!1,sidebarItemRect:{}},_anchor:{anchorTopLocations:[],indexAnchorComponents:[],currentStickAnchorIndex:-1,anchorItemsHeight:[]},_stickOffsetTopPx:0,activeSidebarItem:0,tipTop:0,showTip:!1,tipHeight:0},observers:{scrollTop:function(t){this.setIndexListStyle(t)},stickOffsetTop:function(t){this.setData({_stickOffsetTopPx:pixelUtil.rpx2px(t)})}},methods:{async init(){await this.parseSidebarRect(),await this.parseSidebarItemRect(),await this.parseIndexAnchors(),this.parseAnchorRect(),wx.lin=wx.lin||{},wx.lin.setScrollTop=t=>{dataUtil.setDiffData(this,{scrollTop:t})}},async parseSidebarRect(){const t=await nodeUtil.getNodeRectFromComponent(this,".sidebar");this.setData({"_sidebar.height":t.height,"_sidebar.top":t.top})},async parseSidebarItemRect(){const t=this.data.sidebarData.length,e=await nodeUtil.getNodeRectFromComponent(this,".sidebar-item"),i=this.data._sidebar.height/t,a=e.height,s=await nodeUtil.getNodeFieldsFromComponent(this,".sidebar-item",{computedStyle:["margin-top"]}),o=await nodeUtil.getNodeFieldsFromComponent(this,".tip",{computedStyle:["height"]}),n=[],r=s["margin-top"].replace("px","");for(let e=1;e<=t;e++)n.push((2*e-1)*a/2+e*parseInt(r));const h=parseInt(o.height.replace("px",""));this.setData({tipHeight:h,tipHeightOverflow:.205*h,"_sidebar.sidebarItemRect":e,"_sidebar.sidebarItemHeight":i,"_sidebar.sidebarItemRealHeight":a,"_sidebar.sidebarItemCenterPoints":n})},parseIndexAnchors(){const t=this.getRelationNodes("../index-anchor/index");if(t){this.setData({"_anchor.indexAnchorComponents":t});for(let e=0;e<t.length;e++)t[e].setData({anchorText:this.data.sidebarData[e]})}else console.error("获取 index-anchor 节点实例失败，请参考文档检查您的代码是否书写正确")},async parseAnchorRect(){const t=[],e=[],i=this.data._anchor.indexAnchorComponents;for(const a of i){const i=await nodeUtil.getNodeRectFromComponent(a,".anchor");null!==i&&(t.push(i.top),e.push(i.height))}this.setData({"_anchor.anchorTopLocations":t,"_anchor.anchorItemsHeight":e})},switchTipShow(t){dataUtil.setDiffData(this,{showTip:t})},switchSidebarIndex(t){dataUtil.setDiffData(this,{activeSidebarItem:t})},switchIsMovingSidebar(t){dataUtil.setDiffData(this,{"_sidebar.isMoving":t})},setIndexListStyle(t){const e=this.countCurrentActiveIndex(t);void 0!==e&&(this.data.isStick&&this.setAnchorStyle(t),this.data.showSidebar&&!this.data._sidebar.isMoving&&this.switchSidebarIndex(e))},setAnchorStyle(t){const{anchorTopLocations:e,anchorItemsHeight:i,indexAnchorComponents:a}=this.data._anchor,s=this.countCurrentActiveIndex(t),o=a[s],n=e[s],r=i[s],h=e[s+1],c=this.data._stickOffsetTopPx;if(t+c>=n&&t+c<=h-r&&!o.isFixed()){o.setFixed(this.data.stickOffsetTop,r);for(let t=0;t<a.length;t++)t!==s&&a[t].clearStyle()}else if(t+c>h-r&&t+c<h&&!o.isRelative()){o.setRelative(h-n-r);for(let t=0;t<a.length;t++)t!==s&&a[t].clearStyle()}else if(t+c<n)for(let t=0;t<a.length;t++)a[t].clearStyle()},countCurrentActiveIndex(t){let e=0;const{anchorTopLocations:i}=this.data._anchor;for(let a=0;a<i.length;a++)if(t+this.data._stickOffsetTopPx<i[a]){e=a-1;break}return e<0&&(e=0),e},onTouchMove(t){this.switchTipShow(!0),this.switchIsMovingSidebar(!0);const{top:e,sidebarItemHeight:i}=this.data._sidebar,a=this.data.sidebarData.length,s=t.touches[0].clientY;let o=Math.floor((s-e)/i);o<0?o=0:o>a-1&&(o=a-1);const n=this.data.sidebarData[o];dataUtil.setDiffData(this,{tipText:n,activeSidebarItem:o,tipTop:this.data._sidebar.sidebarItemCenterPoints[o]});let r=this.data._anchor.anchorTopLocations[o]-this.data._stickOffsetTopPx;wx.pageScrollTo({duration:0,scrollTop:r}),"tap"===t.type&&setTimeout(()=>{this.switchIsMovingSidebar(!1)},100),eventUtil.emit(this,"linselected",{index:o,tipText:n})},onTouchend(){setTimeout(()=>{this.switchTipShow(!1)},500),this.switchIsMovingSidebar(!1)},onTapSidebar(t){this.onTouchMove(t)}}});