import React from 'react';
import { TextLink as Link, Button, Title } from 'components';
import { ExternalLinkIcon } from '@heroicons/react/outline'
import Modal, { modalStyles } from 'components/Modal';

const twitterUrl = ({ social }) => `https://twitter.com/${social.twitter}`;

const NewsletterAndTwitterInner = ({ siteMetadata }) => (
  <p>
    Learn more about Backstage via{' '}
    <Link to="/backstage-weekly/" color="primary">
      our newsletter
    </Link>{' '}
    or follow{' '}
    <Link to={twitterUrl(siteMetadata)} color="primary">
      @{siteMetadata.social.twitter}
    </Link>
    .
  </p>
);

const TwitterInner = ({ siteMetadata }) => (
  <p>
    Follow{' '}
    <Link to={twitterUrl(siteMetadata)} color="primary">
      @{siteMetadata.social.twitter}
    </Link>
    .
  </p>
);

const GetDemoSurveyInner = ({ referredEmail }) => {
  const codedEmail = encodeURIComponent(referredEmail);

  return (
    <Button
      link={true}
      to={`/request-demo/?email=${codedEmail}`}
      icon={<ExternalLinkIcon />}
      text="Request a demo"
      color="primary"
    />
  );
};

const GetTrialInner = ({ referredEmail }) => {
  const codedEmail = encodeURIComponent(referredEmail);

  return (
    <Button
      link={true}
      to={`/free-trial/?email=${codedEmail}`}
      prefixIcon={<ExternalLinkIcon />}
      text="Request a free trial"
      color="primary"
    />
  );
};

const FormSubmissionModal = ({
  modalOpen,
  handleCloseModal,
  titleText = 'Thank you!',
  bodyText = (
    <p>
      We&apos;ll be in touch to learn more about your stack and the problems you&apos;re trying to
      solve.
    </p>
  ),
  siteMetadata = {
    social: {
      twitter: 'https://twitter.com/roadiehq',
    },
  },
  followOn = 'NEWSLETTER_AND_TWITTER',
  email,
  titleEmoji = (
    <span aria-label="Party Streamers" role="img">
      🎉
    </span>
  ),
}) => {
  let followOnContent;
  if (followOn === 'NEWSLETTER_AND_TWITTER') {
    followOnContent = <NewsletterAndTwitterInner siteMetadata={siteMetadata} />;
  } else if (followOn === 'TWITTER') {
    // Doesn't make sense to offer to let people sign up to the newsletter immediately after
    // they have just signed up to the newsletter.
    followOnContent = <TwitterInner siteMetadata={siteMetadata} />;
  } else if (followOn === 'GET_DEMO_SURVEY') {
    followOnContent = <GetDemoSurveyInner referredEmail={email} />;
  } else if (followOn === 'GET_TRIAL') {
    followOnContent = <GetTrialInner referredEmail={email} />;
  }

  return (
    <Modal
      isOpen={modalOpen}
      style={modalStyles({ maxWidth: 660 })}
      contentLabel="Modal"
      onRequestClose={handleCloseModal}
    >
      <div className="p-4 prose prose-primary max-w-none mb-1">
        <Title>
          {titleText}{' '}{titleEmoji}
        </Title>
        {bodyText}

        {followOnContent}
      </div>
    </Modal>
  );
};

export default FormSubmissionModal;
