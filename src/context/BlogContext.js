import React, { useState } from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
    const [ blogPosts, setBlogPosts ] = useState([])

    const addBlogPost = () => {
        setBlogPosts([ 
            ...blogPosts, 
            { title: `BlogPost #${blogPosts.length + 1}`}
        ])
    }

    // const blogPosts = [
    //     { title: 'Blog Post #1'},
    //     { title: 'Blog Post #2'},
    //     { title: 'Blog Post #3'},
    // ]

    return (
        <BlogContext.Provider
        value={{ data: blogPosts, addBlogPost}}
        >
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext