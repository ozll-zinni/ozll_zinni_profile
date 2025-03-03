import supabase from '../supabaseClient';

export const fetchProjectDetailById = async (id: string) => {
    const { data, error } = await supabase.from('detail').select('*').eq('id', id).single();

    if (error) {
        console.error('프로젝트 데이터 가져오기 실패:', error);
        return null;
    }

    return data;
};
