import React, { memo } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import SEO from 'components/seo'
import Header from 'components/header'

const TextWell = styled.div`
  color: ${({ theme }) => theme.colors.c3};
  height: auto;
  width: 60vw;
  margin: 3vw 7.5vw 0 7.5vw;
  padding: 3vh;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: left;
  text-justify: inter-word;
  background-color: ${({ theme }) => theme.colors.c2};
  font-size: 20px;
`

const Legal = () => (
  <>
    <SEO title="Privacy Policy" />
    <Header siteTitle="Strove" />
    <TextWell>
      <h1 style={{ alignSelf: 'center' }}>Privacy Policy</h1>
      <h6>Last Edited on 2019-06–06</h6>
      <p>
        his privacy policy has been compiled to better serve those who are
        concerned with how their 'Personally Identifiable Information' (PII) is
        being used online. PII, as described in US privacy law and information
        security, is information that can be used on its own or with other
        information to identify, contact, or locate a single person, or to
        identify an individual in context. Please read our privacy policy
        carefully to get a clear understanding of how we collect, use, protect
        or otherwise handle your Personally Identifiable Information in
        accordance with our website.
      </p>
      <h2>
        What personal information do we collect from the people that visit our
        blog, website or app?
      </h2>
      <p>
        When ordering or registering on our site, as appropriate, you may be
        asked to enter your name, email address, credit card information or
        other details to help you with your experience.
      </p>
      <h2>When do we collect information?</h2>
      <p>
        We collect information from you when you register on our site, place an
        order or enter information on our site.
      </p>
      <h2>How do we use your information?</h2>
      <p>
        We may use the information we collect from you when you register, make a
        purchase, sign up for our newsletter, respond to a survey or marketing
        communication, surf the website, or use certain other site features in
        the following ways:
      </p>
      <ul>
        <li>To improve our website in order to better serve you.</li>
        <li>
          To allow us to better service you in responding to your customer
          service requests.
        </li>
        <li> To quickly process your transactions.</li>
        <li>
          To send periodic emails regarding your order or other products and
          services.
        </li>
        <li>
          To follow up with them after correspondence (live chat, email or phone
          inquiries)
        </li>
      </ul>
      <h2>How do we protect your information?</h2>
      <p>
        We do not use vulnerability scanning and/or scanning to PCI standards.
      </p>
      <p>
        An external PCI compliant payment gateway handles all CC transactions.
      </p>
      <p> We do not use Malware Scanning. </p>
      <p>
        Your personal information is contained behind secured networks and is
        only accessible by a limited number of persons who have special access
        rights to such systems, and are required to keep the information
        confidential. In addition, all sensitive/credit information you supply
        is encrypted via Secure Socket Layer (SSL) technology.
      </p>
      <p>
        We implement a variety of security measures when a user places an order
        enters, submits, or accesses their information to maintain the safety of
        your personal information.
      </p>
      <p>
        All transactions are processed through a gateway provider and are not
        stored or processed on our servers.
      </p>
      <h2> Do we use 'cookies'?</h2>
      <p>
        Yes. Cookies are small files that a site or its service provider
        transfers to your computer's hard drive through your Web browser (if you
        allow) that enables the site's or service provider's systems to
        recognize your browser and capture and remember certain information. For
        instance, we use cookies to help us remember and process the items in
        your shopping cart. They are also used to help us understand your
        preferences based on previous or current site activity, which enables us
        to provide you with improved services. We also use cookies to help us
        compile aggregate data about site traffic and site interaction so that
        we can offer better site experiences and tools in the future.
      </p>
      <h2>We use cookies to:</h2>
      <ul>
        <li>Understand and save user's preferences for future visits.</li>
        <li>
          Compile aggregate data about site traffic and site interactions in
          order to offer better site experiences and tools in the future. We may
          also use trusted third-party services that track this information on
          our behalf.
        </li>
      </ul>
      <p>
        You can choose to have your computer warn you each time a cookie is
        being sent, or you can choose to turn off all cookies. You do this
        through your browser settings. Since browser is a little different, look
        at your browser's Help Menu to learn the correct way to modify your
        cookies.
      </p>
      <p>
        If you turn cookies off, Some of the features that make your site
        experience more efficient may not function properly.It won't affect the
        user's experience that make your site experience more efficient and may
        not function properly.
      </p>
      <h2>Third-party disclosure</h2>
      <p>
        We do not sell, trade, or otherwise transfer to outside parties your
        Personally Identifiable Information unless we provide users with advance
        notice. This does not include website hosting partners and other parties
        who assist us in operating our website, conducting our business, or
        serving our users, so long as those parties agree to keep this
        information confidential. We may also release information when it's
        release is appropriate to comply with the law, enforce our site
        policies, or protect ours or other" rights, property or safety.
      </p>
      <p>
        However, non-personally identifiable visitor information may be provided
        to other parties for marketing, advertising, or other uses.{' '}
      </p>
      <h2>Third-party links</h2>
      <p>
        Occasionally, at our discretion, we may include or offer third-party
        products or services on our website. These third-party sites have
        separate and independent privacy policies. We therefore have no
        responsibility or liability for the content and activities of these
        linked sites. Nonetheless, we seek to protect the integrity of our site
        and welcome any feedback about these sites.
      </p>
      <h2> Google </h2>
      <p>
        Google's advertising requirements can be summed up by Google's
        Advertising Principles. They are put in place to provide a positive
        experience for
        users. https://support.google.com/adwordspolicy/answer/1316548?hl=en
      </p>
      <p>We use Google AdSense Advertising on our website.</p>
      <p>
        Google, as a third-party vendor, uses cookies to serve ads on our site.
        Google's use of the DART cookie enables it to serve ads to our users
        based on previous visits to our site and other sites on the Internet.
        Users may opt-out of the use of the DART cookie by visiting the Google
        Ad and Content Network privacy policy.
      </p>
      <h2>We have implemented the following:</h2>
      <ul>
        <li>Remarketing with Google AdSense</li>
        <li>Demographics and Interests Reporting </li>
      </ul>
      <p>
        We, along with third-party vendors such as Google use first-party
        cookies (such as the Google Analytics cookies) and third-party cookies
        (such as the DoubleClick cookie) or other third-party identifiers
        together to compile data regarding user interactions with ad impressions
        and other ad service functions as they relate to our website.
      </p>
      <h2>Opting out: </h2>
      <p>
        Users can set preferences for how Google advertises to you using the
        Google Ad Settings page. Alternatively, you can opt out by visiting the
        Network Advertising Initiative Opt Out page or by using the Google
        Analytics Opt Out Browser add on.
      </p>
      <h2> California Online Privacy Protection Act</h2>
      <p>
        CalOPPA is the first state law in the nation to require commercial
        websites and online services to post a privacy policy. The law's reach
        stretches well beyond California to require any person or company in the
        United States (and conceivably the world) that operates websites
        collecting Personally Identifiable Information from California consumers
        to post a conspicuous privacy policy on its website stating exactly the
        information being collected and those individuals or companies with whom
        it is being shared. - See more
        at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf
      </p>
      <h2>According to CalOPPA, we agree to the following:</h2>
      <p> Users can visit our site anonymously.</p>
      <p>
        Once this privacy policy is created, we will add a link to it on our
        home page or as a minimum, on the first significant page after entering
        our website.
      </p>
      <p>
        Our Privacy Policy link includes the word 'Privacy' and can easily be
        found on the page specified above.
      </p>
      <p> You will be notified of any Privacy Policy changes:</p>
      <ul>
        <li> On our Privacy Policy Page</li>
      </ul>
      <h4>Can change your personal information:</h4>
      <ul>
        <li> By emailing us </li>
        <li> By logging in to your account</li>
      </ul>
      <h2>How does our site handle Do Not Track signals?</h2>
      <p>
        We honor Do Not Track signals and Do Not Track, plant cookies, or use
        advertising when a Do Not Track (DNT) browser mechanism is in place.
      </p>
      <h2> Does our site allow third-party behavioral tracking?</h2>{' '}
      <p>
        It's also important to note that we do not allow third-party behavioral
        tracking
      </p>
      <h2>COPPA (Children Online Privacy Protection Act)</h2>
      <p>
        When it comes to the collection of personal information from children
        under the age of 13 years old, the Children's Online Privacy Protection
        Act (COPPA) puts parents in control. The Federal Trade Commission,
        United States' consumer protection agency, enforces the COPPA Rule,
        which spells out what operators of websites and online services must do
        to protect children's privacy and safety online.
      </p>
      <p>
        We do not specifically market to children under the age of 13 years old.
      </p>
      <p>
        Do we let third-parties, including ad networks or plug-ins collect PII
        from children under 13?
      </p>
      <h2>Fair Information Practices</h2>
      <p>
        The Fair Information Practices Principles form the backbone of privacy
        law in the United States and the concepts they include have played a
        significant role in the development of data protection laws around the
        globe. Understanding the Fair Information Practice Principles and how
        they should be implemented is critical to comply with the various
        privacy laws that protect personal information.
      </p>
      <h2>
        In order to be in line with Fair Information Practices we will take the
        following responsive action, should a data breach occur:
      </h2>
      <p>We will notify you via email</p>
      <li> Within 1 business day</li>
      <p> We will notify the users via in-site notification</p>
      <li> Within 1 business day </li>
      <p>
        We also agree to the Individual Redress Principle which requires that
        individuals have the right to legally pursue enforceable rights against
        data collectors and processors who fail to adhere to the law. This
        principle requires not only that individuals have enforceable rights
        against data users, but also that individuals have recourse to courts or
        government agencies to investigate and/or prosecute non-compliance by
        data processors.
      </p>
      <h2> CAN SPAM Act</h2>
      <p>
        The CAN-SPAM Act is a law that sets the rules for commercial email,
        establishes requirements for commercial messages, gives recipients the
        right to have emails stopped from being sent to them, and spells out
        tough penalties for violations.
      </p>
      <h2>We collect your email address in order to: </h2>
      <ul>
        <li>
          Send information, respond to inquiries, and/or other requests or
          questions
        </li>
        <li>
          Process orders and to send information and updates pertaining to
          orders
        </li>
        <li>
          Market to our mailing list or continue to send emails to our clients
          after the original transaction has occurred.{' '}
        </li>
      </ul>
      <h2>To be in accordance with CANSPAM, we agree to the following: </h2>
      <ul>
        <li> Not use false or misleading subjects or email addresses. </li>
        <li>
          Identify the message as an advertisement in some reasonable way.
        </li>
        <li>
          Include the physical address of our business or site headquarters.{' '}
        </li>
        <li>
          Monitor third-party email marketing services for compliance, if one is
          used.
        </li>
        <li>Honor opt-out/unsubscribe requests quickly.</li>
        <li>
          Allow users to unsubscribe by using the link at the bottom of each
          email
        </li>
        <h4>
          If at any time you would like to unsubscribe from receiving future
          emails, you can email us at contact@strove.io
        </h4>
        <li>
          Follow the instructions at the bottom of each email. and we will
          promptly remove you from all correspondence.
        </li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        If there are any questions regarding this privacy policy, you may
        contact us using the information below.
      </p>
      <h5>CodeNGo</h5>
      <h5>Andrespol</h5>
      <h5>Rokicińska 121 street</h5>
      <h5>contact@strove.io</h5>
      <Link to="/">Go back to the homepage</Link>
    </TextWell>
  </>
)

export default memo(Legal)
