'use client';

import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { CopyIcon } from '@/app/icons/CopyIcon';
import { IconButton, Tooltip } from '@mui/material';
import { CheckIcon } from '@/app/icons/CheckIcon';
import { hybrid } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Box from '@mui/material/Box';

interface CodeBlockProps {
  codeString: string;
  language: string;
}

const CodeBlock = ({ codeString, language }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false); // State to control the tooltip open status

  const handleCopy = async () => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setOpenTooltip(true); // Open the tooltip
      setTimeout(() => {
        setIsCopied(false);
        setOpenTooltip(false); // Close the tooltip after 3 seconds
      }, 3000);
    } else {
      console.error('Clipboard API not available');
    }
  };

  return (
    <Box className='relative'>
      <SyntaxHighlighter
        language={language}
        style={hybrid}
        className={'p-4'}
        showLineNumbers={true}
      >
        {codeString}
      </SyntaxHighlighter>
      <Tooltip
        title={isCopied ? 'Copied!' : 'Copy'}
        placement='left'
        open={openTooltip} // Controlled by state
        disableHoverListener // Disable default hover behavior
      >
        <IconButton
          onClick={handleCopy}
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
          size='small'
        >
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default CodeBlock;
