export interface Post {
    id: number,
    description: string,
    image: string,
    likes: number
}

export class Post implements Post{
    id = 0;
    description= '';
    image = '';
    likes = 0;
}
