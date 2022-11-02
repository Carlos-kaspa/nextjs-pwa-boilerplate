import React from 'react'
import ComponentLoader from '../global/ComponentLoader/ComponenLoader'
import ContextErrorHandler from '../global/ContextErrorHandler/ContextErrorHandler'
import dynamic from 'next/dynamic'
import { IBlogPost } from '../global/Mui/MuiCard'

const DynamicMuiCard = dynamic(() => import('../global/Mui/MuiCard'), {
    suspense: true,
})

interface IDynamicPosts {
    loading: boolean
    posts: Array<IBlogPost>
}
export const BuggyPostsFallback = ({ loading, posts }: IDynamicPosts) => {
    return (
        <div
            style={{
                display: 'flex',
                gap: 10,
                flexWrap: 'wrap',
                padding: '1rem 0',
                justifyContent: 'center'
            }}
        >   
            <ComponentLoader loading={loading}>
                {posts && posts.map((post: IBlogPost) => (
                    <ContextErrorHandler key={post.id} hideOnError={false}>
                        <DynamicMuiCard
                            key={`blogpost-${post.id}`}
                            owner={post.owner}
                            text={post.text}
                            id={post.id}
                            image={post.image}
                            likes={post.likes}
                            publishDate={post.publishDate}
                            tags={post.tags}
                        />
                    </ContextErrorHandler>
                ))}
            </ComponentLoader>
        </div>
    )
}
