export default {
    User: [
        {
            user_id: 1,
            name: '사나',
            create_at: '2020-03-10 10:42:05'
        },
        {
            user_id: 2,
            name: '다현',
            create_at: '2020-03-10 11:05:17'
        },
        {
            user_id: 1,
            name: '슬기',
            create_at: '2020-03-12 18:01:55'
        }
    ],
    Content: [
        {
            content_id: 1,
            user_id: 1,
            title: '게시판 테스트',
            context: '내용입니다',
            create_at: '2020-03-11 13:00:05',
            update_at: null
        },
        {
            content_id: 2,
            user_id: 3,
            title: 'once',
            context: '3기',
            create_at: '2020-03-11 14:02:32',
            update_at: null
        },
        {
            content_id: 3,
            user_id: 3,
            title: '레벨',
            context: 'level up project',
            create_at: '2020-03-11 14:21:01',
            update_at: null
        }
    ],
    Comment: [
        {
            comment_id: 1,
            user_id: 1,
            content_id: 1,
            context: 'ㄳ',
            create_at: '2020-03-11 13:01:10',
            update_at: null
        },
        {
            comment_id: 2,
            user_id: 2,
            content_id: 2,
            context: 'wow',
            create_at: '2020-03-11 15:11:30',
            update_at: null
        },
        {
            comment_id: 3,
            user_id: 2,
            content_id: 3,
            context: 'oh~',
            create_at: '2020-03-11 15:13:09',
            update_at: null
        }
    ],
    SubCommnet: [
        {
            subcomment_id: 1,
            comment_id: 3,
            user_id: 1,
            context: 'reply',
            create_at: '2020-03-11 14:19:22',
            update_at: null
        }
    ]
};
