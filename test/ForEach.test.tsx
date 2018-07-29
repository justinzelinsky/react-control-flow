import * as React from 'react';
import { testHtml } from './test-util';
import ForEach from '../src/ForEach';

// components used in testing
const Index = ( { index }:any ) => <span className="index">{ index }</span>;
const Item = ( { item }:any ) => <span className="item">{ item }</span>;
const ItemAsValue = ( { value }:any ) => <span className="value">{ value }</span>;
const OtherProps = ( {item, a, b}: any ) => (
    <div>
        <span className="a">{ a }</span>
        <span className="b">{ b }</span>
        <span className="item">{ item }</span>
    </div>
);
const Length = ( { item }:any ) => <span className="length">{ item.length }</span>;

// for testing, we need a reference that allows us to violate the Props contract
const ForEachAny:any = ForEach as any;

describe('<ForEach />', () => {

    testHtml(
        'empty',
        (
            <ForEachAny />
        ),
        '');

    testHtml(
        'empty',
        (
            <ForEachAny />
        ),
        '');

    testHtml(
        'non-array items',
        (
            <ForEach items={ {count: 1 } }
                     component={ Index }/>
        ),
        '');

    testHtml(
        'empty array',
        (
            <ForEach items={ [] }
                     component={ Index }/>
        ),
        '');

    testHtml(
        'index for three item array',
        (
            <ForEach items={ [ null, null, null ] }
                     component={ Index } />
        ),
        '<span class="index">0</span><span class="index">1</span><span class="index">2</span>');

    testHtml(
        'item for three string array',
        (
            <ForEach items={ [ 'a', 'b', 'c' ] }
                     component={ Item } />
        ),
        '<span class="item">a</span><span class="item">b</span><span class="item">c</span>');

    testHtml(
        'item as value for three string array',
        (
            <ForEach items={ [ 'a', 'b', 'c' ] }
                     as="value"
                     component={ ItemAsValue } />
        ),
        '<span class="value">a</span><span class="value">b</span><span class="value">c</span>');

    testHtml(
        'item as value for three string array',
        (
            <ForEach items={ [ 'a', 'b', 'c' ] }
                     as="value"
                     component={ ItemAsValue } />
        ),
        '<span class="value">a</span><span class="value">b</span><span class="value">c</span>');

    testHtml(
        'object array',
        (
            <ForEach items={ [ 1, 2 ]}
                     component={ OtherProps }
                     a="alpha"
                     b="beta" />
        ),
        '<div><span class="a">alpha</span><span class="b">beta</span><span class="item">1</span></div>' +
        '<div><span class="a">alpha</span><span class="b">beta</span><span class="item">2</span></div>');

    testHtml(
        'Array of arrays',
        (
            <ForEach items={ [ [ 1 ], [ 2, 3, ], [ 4, 5, 6 ] ] }
                     component={ Length } />
        ),
        '<span class="length">1</span><span class="length">2</span><span class="length">3</span>'
    )
});
