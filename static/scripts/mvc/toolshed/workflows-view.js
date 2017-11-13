define("mvc/toolshed/workflows-view",["exports","mvc/toolshed/toolshed-model","mvc/toolshed/util"],function(o,t,e){"use strict";function s(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(o,"__esModule",{value:!0});var l=s(t),a=s(e),r=Backbone.View.extend({el:"#center",defaults:[{}],initialize:function(o){var t=this;this.model=new l.default.WorkflowTools,this.listenTo(this.model,"sync",this.render),this.model.fetch(),t.render()},render:function(o){var t=this,e=t.templateWorkflows,s=t.model.models;t.$el.html(e({title:"Workflows Missing Tools",workflows:s,queue:a.default.queueLength()})),$("#center").css("overflow","auto"),t.bindEvents()},bindEvents:function(){var o,t=this;$(".show_wf_repo").on("click",function(){var t=$(this).attr("data-toolids"),e=$(this).attr("data-shed"),s=Galaxy.root+"api/tool_shed/repository",l={tool_ids:t};$.get(s,l,function(t){o=t.repository.id;var s="repository/s/"+e.replace(/:/g,"%3a").replace(/\//g,"%2f")+"/r/"+t.repository.id;Backbone.history.navigate(s,{trigger:!0,replace:!0})})}),$(".queue_wf_repo").on("click",function(){var t=$(this),e=t.attr("data-toolids"),s=t.attr("data-shed"),l=Galaxy.root+"api/tool_shed/repository",r={tool_ids:e};$.get(l,r,function(e){o=e.repository.id,r={tool_shed_url:s,repository_id:o},$.get(l,r,function(o){var e=Object.keys(o.repository.metadata)[0],l=o.repository.metadata[e];l.tool_shed_url=s,a.default.addToQueue(l),t.remove()})})}),$("#from_workflow").on("click",t.loadWorkflows)},reDraw:function(o){this.$el.empty(),this.initialize(o)},templateWorkflows:_.template(['<div class="unified-panel-header" id="panel_header" unselectable="on">','<div class="unified-panel-header-inner"><%= title %></div>','<div class="unified-panel-header-inner" style="position: absolute; right: 5px; top: 0px;"><a href="#/queue">Repository Queue (<%= queue %>)</a></div>',"</div>",'<style type="text/css">',".workflow_names, .workflow_tools { list-style-type: none; } ul.workflow_tools, ul.workflow_names {  padding-left: 0px; }","</style>",'<table id="workflows_missing_tools" class="grid" border="0" cellpadding="2" cellspacing="2" width="100%">','<thead id="grid-table-header">',"<tr>",'<th class="datasetRow">Workflows</th>','<th class="datasetRow">Tool IDs</th>','<th class="datasetRow">Shed</th>','<th class="datasetRow">Name</th>','<th class="datasetRow">Owner</th>','<th class="datasetRow">Actions</th>',"</tr>","</thead>","<tbody>","<% _.each(workflows, function(workflow) { %>","<tr>",'<td class="datasetRow">','<ul class="workflow_names">','<% _.each(workflow.get("workflows"), function(name) { %>','<li class="workflow_names"><%= name %></li>',"<% }); %>","</ul>","</td>",'<td class="datasetRow">','<ul class="workflow_tools">','<% _.each(workflow.get("tools"), function(tool) { %>','<li class="workflow_tools"><%= tool %></li>',"<% }); %>","</ul>","</td>",'<td class="datasetRow"><%= workflow.get("shed") %></td>','<td class="datasetRow"><%= workflow.get("repository") %></td>','<td class="datasetRow"><%= workflow.get("owner") %></td>','<td class="datasetRow">','<ul class="workflow_tools">','<li class="workflow_tools">','<input type="button" class="show_wf_repo btn btn-primary" data-shed="<%= workflow.get("shed") %>" data-owner="<%= workflow.get("owner") %>" data-repo="<%= workflow.get("repository") %>" data-toolids="<%= workflow.get("tools").join(",") %>" value="Show Repository" /></li>',"</ul>","</td>","</tr>","<% }); %>","</ul>","</div>"].join(""))});o.default={Workflows:r}});
//# sourceMappingURL=../../../maps/mvc/toolshed/workflows-view.js.map