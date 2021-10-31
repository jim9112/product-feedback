export interface IFeedback {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  upvotedby?: string[];
  status: string;
  description: string;
  comments?: {
    id: number;
    content: string;
    user: { image: string; name: string; username: string };
    replies?: {
      content: string;
      replyingTo: string;
      user: { image: string; name: string; username: string };
    }[];
  }[];
}
