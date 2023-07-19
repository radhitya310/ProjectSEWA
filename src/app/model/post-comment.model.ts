import { ResPostReplyCommentModel } from "./post-reply-comment.model";

export class ReqPostCommentModel {
    SortBy: string;
    TPostId: number;
    CurrentPage: number;
    PageSize: number;
    MUserId: number;
    constructor() { 
        this.SortBy = "";
        this.TPostId = 0;
        this.CurrentPage = 0;
        this.PageSize = 0;
        this.MUserId = 0;
    }
}

export class ResPostCommentModel {
    TCommentId: number;
    FullName: string;
    CommentTime: Date | any;
    Comment: string;
    TotalLikes: number;
    TotalReply: number;
    UrlProfilePicture: string;
    Username: string;
    CommentTimestamp: string;
    isReply: boolean;
    isSeeReplyComment: boolean;
    isCreateComment: boolean;
    CommentReply: string;
    PostReplyComment: Array<ResPostReplyCommentModel> = [];
    constructor() { 
        this.TCommentId = 0;
        this.FullName = "";
        this.Comment = "";
        this.TotalLikes = 0;
        this.TotalReply = 0;
        this.Username = "";
        this.isSeeReplyComment = false;
        this.UrlProfilePicture = "";
        this.CommentTimestamp= "";
        this.isReply = false;
        this.isCreateComment = false;
        this.CommentReply = '';
    }
}