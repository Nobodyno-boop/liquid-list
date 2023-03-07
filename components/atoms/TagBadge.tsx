import React, { FC } from 'react';

export type TagProps = {
    tag: {
        name: string,
        _id: string
    }
    deleteTag: (id: string) => void
};

export const TagBadge: FC<TagProps> = ({tag, deleteTag}) => {
    const removeTag = () => {
        deleteTag(tag._id);
    }

    return (
        <div className="badge badge-primary badge-outline">
            {tag.name}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"
                onClick={removeTag}
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </div>
    );
}