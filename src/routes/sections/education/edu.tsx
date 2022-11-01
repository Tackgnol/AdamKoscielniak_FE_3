import { component$ } from '@builder.io/qwik'
import { School } from '~/models/dto'
import Card from '~/components/card/card'

export default component$<School>(
    ({ School, Faculty, Time, GradeEu, GradeUs, Level, Course, Thesis }) => (
        <Card title={School} subTitle={Time}>
            <div class="italic text-2xl text-gray-400">{Faculty}</div>
            <div class="text-xl my-1">
                <span class="font-extrabold">{Level}:&nbsp;</span>
                <span>{Course}</span>
            </div>
            <div class="text-xl my-1">
                <span class="font-extrabold">Final grade:&nbsp;</span>
                <span class="italic">
                    {GradeEu}&nbsp;/&nbsp;{GradeUs}
                </span>
            </div>
            <div class="text-xl my-1">
                <span class="font-extrabold">Thesis title:&nbsp;</span>
                <span class="italic">{Thesis}</span>
            </div>
        </Card>
    )
)
