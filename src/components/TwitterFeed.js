import React, { useState } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { string } from 'prop-types'

const FeedSkeleton = () => (
  <div>
    <SkeletonTheme color="#202020" highlightColor="#444">

      <div className="flex">
        <Skeleton circle height={50} width={50} />

        <div className="flex flex-col pt-1 pl-2">
          <Skeleton width={250} height={20} />
          <span className="pt-1">
            <Skeleton width={100} height={10} />
          </span>
        </div>

      </div>

      <p className="p-2">
        <Skeleton count={4} height={15} />
      </p>

    </SkeletonTheme>
  </div>
)

const TwitterFeed = ( { userName } ) => {
  const [ twitterFeedLoading, setTwitterFeedLoading ] = useState( false )

  return (
    <div>

      <TwitterTimelineEmbed
        noFooter
        transparent
        theme="dark"
        sourceType="timeline"
        screenName={userName}
        options={{ height: '50vh' }}
        onLoad={() => setTwitterFeedLoading( true )}
      />

      {!twitterFeedLoading && (
      <div className="border-2 border-secondary-grey rounded-lg px-4 py-2 overflow-y-scroll" style={{ height: '50vh' }}>
        {[ ...Array( 6 ) ].map( x => <FeedSkeleton key={x} /> )}
      </div>
      )}

    </div>
  )
}

TwitterFeed.propTypes = {
  userName: string.isRequired,
}

export default TwitterFeed
