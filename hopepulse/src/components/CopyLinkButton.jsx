import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCheck } from "@fortawesome/free-solid-svg-icons";

const CopyLinkButton = () => {
  const urlRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (urlRef.current) {
      urlRef.current.select();
      document.execCommand('copy');
      setCopied(true); // Set copied to true when the button is clicked
      // Reset copied to false after a certain duration if needed
      setTimeout(() => {
        setCopied(false);
      }, 6000); // Reset after 3 seconds (adjust as needed)
    }
  };

  return (
    <div>
      <input type="text" value={window.location.href} ref={urlRef} style={{ position: 'absolute', left: '-9999px' }} readOnly />
      <button onClick={copyToClipboard}>
        <div className="flex flex-col ml-2 hover:bg-gray-50">
            {copied ? ( // Render the check icon if copied is true
              <FontAwesomeIcon icon={faCheck} className="h-8 w-8 text-green-500 mb-1" />
            ) : (
              <FontAwesomeIcon icon={faLink} className="h-8 w-8 text-black mb-1" />
            )}
          <p className="text-sm font-normal">{copied ? 'Link' : 'Copy'}<br />{copied ? 'copied' : 'link'}</p>
          </div>
      </button>
    </div>
  );
};

export default CopyLinkButton;
