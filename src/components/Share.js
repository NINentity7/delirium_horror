import React from 'react';
import { WhatsappShareButton } from 'react-share';
import { WhatsappIcon } from 'react-share';

function Share({ id, title }) {
  return (
    <>
      <div>
        <WhatsappShareButton
          url={`https://deliriumhorror.netlify.app/movie/${id}`}
          title={`Será que vale a pena conferir esse filme: ${title}?`}
        >
          <WhatsappIcon round={true} />
        </WhatsappShareButton>
      </div>
    </>
  );
}

export default Share;
