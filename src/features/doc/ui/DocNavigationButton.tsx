import React from 'react'
import { Link } from 'react-router';
import { ReactSVG } from 'react-svg';
import { NEXT_ICON, PREV_ICON } from '../../../constants/image';

type Props = {
    title: string;
    to: string;
    prev?: boolean;
    next?: boolean;
}

const DocNavigationButton = ({ title, to, prev = false, next = false }: Props) => {
  return (
    <Link to={to} className="bg-white px-4 py-2 flex-wrap text-slate-600 hover:text-black-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm flex gap-2 items-center">
        {prev && <ReactSVG src={PREV_ICON}  />}
        {title}
        {next && <ReactSVG src={NEXT_ICON} />}

    </Link>
  )
}

export default DocNavigationButton