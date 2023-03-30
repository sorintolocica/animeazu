/*
 * Arleth-desz.blogspot.com
 */
var posts_no = 9999;
var post_rilis = true;

function post_latest(M) {
  document.write('<ul class="last-post-wrap">');
  var entries = M.feed.entry;
  var numEntries = entries.length;

  for (var I = 0; I < numEntries; I++) {
    var j, z = entries[I],
      E = z.title.$t;
    
    for (var y = 0; y < z.link.length; y++) {
      if ("replies" == z.link[y].rel && "text/html" == z.link[y].type) {
        var C = z.link[y].title,
          B = z.link[y].href;
      }
      if ("alternate" == z.link[y].rel) {
        j = z.link[y].href;
        break;
      }
    }
    var F = z.published.$t,
      H = F.substring(0, 4),
      J = F.substring(5, 7),
      K = F.substring(8, 10),
      x = new Array;
    x[1] = "Ianuarie", x[2] = "Februarie", x[3] = "Martie", x[4] = "Aprilie", x[5] ", x[6] = "Iunie", x[7] = "Iulie", x[8] = "August", x[9] = "Septembrie", x[10] = "Octombrie", x[11] = "Noiembrie", x[12] = "Decembrie";
	document.write('<li class="last-post-item">');
document.write('<div class="post_item"><a href="' + j + '" target ="_top">' + E + "</a></div>");
if (post_rilis) {
  document.write('<span class="post-update">' + K + " " + x[parseInt(J, 10)] + " " + H + "</span>");
}
var G = "",
  D = 0;
document.write("</li>");
}
document.write("</ul>");
}

function showAllPostsInCategory(json, category) {
var filteredEntries = {
feed: {
entry: json.feed.entry.filter(function (entry) {
return entry.category.some(function (cat) {
return cat.term === category;
});
}),
},
};
post_latest(filteredEntries);
}
