export class Video{
id: Number;
title: string;
videoCode: string;
description: string;

constructor(id: Number,title: string, videoCode: string, description: string){
this.id= id;
this.title = title;
this.videoCode = videoCode;
this.description = description;
}
}
