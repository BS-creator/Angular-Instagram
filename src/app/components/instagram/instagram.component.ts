import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
declare var jQuery: any;

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss'],
})
export class InstagramComponent implements OnInit {
  public totalNum = 0;
  public postIds = [];
  public posts = [];
  public loading = true;
  private username = 'coolmind2028';

  constructor() {}

  ngOnInit(): void {
    const that = this;
    (function ($) {
      function posts(isfirst) {
        $.instagramFeed({
          username: that.username,
          get_data: true,
          callback: function (data) {
            var originPosts = data.edge_owner_to_timeline_media.edges;
            var posts = [];
            for (var x of originPosts) {
              var post = x.node;
              posts.push({
                id: post.id,
                imgUrl: post.display_url,
                caption:
                  post.edge_media_to_caption.edges.length == 0
                    ? ''
                    : post.edge_media_to_caption.edges[0].node.text,
              });
            }
            that.posts = [...posts];
            that.loading = false;
            $('body').removeClass('loading');
          },
        });
      }
      posts(true);
      setInterval(posts, 3000);
    })(jQuery);
  }
}
