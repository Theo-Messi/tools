interface FrontMatter {
    date: string;
    top?: boolean;
    [key: string]: any;
}
interface Post {
    frontMatter: FrontMatter;
    regularPath: string;
}
export declare function getPosts(pageSize: number): Promise<Post[]>;
export {};
