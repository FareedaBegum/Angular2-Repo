import {Component} from 'angular2/core';
import {Config} from './config.service';
import {PlaylistComponent} from './playlist.component';
import {Video} from './video';
@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlaylistComponent]
})

export class AppComponent {
 mainHeading= Config.Heading;
 videos: Array<Video>;

 constructor(){
  this.videos = [
    new Video(1, "first video", "ABCCode","first video description"),
    new Video(2, "second video", "EFGCode","first video description"),
    new Video(3, "third video", "IJKCode","first video description")
  ]
 }

}
