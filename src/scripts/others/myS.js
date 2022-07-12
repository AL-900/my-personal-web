// eslint-disable-next-line import/no-unresolved

/**
 *
 * truncate function is works for useing cut a big string into a small string . You call  this function and give him a string as first parametar
 * and at second parametar you will tell how much long string you wanting
 *
 *
 * expample :
 *
 * console.log(truncate('hello , my name is hasan al mamun' , 20))
 *
 * expacted output :
 *	hello , my name...
 *
 */

export const truncate = (str, n) =>
    str?.length > n ? `${str.substr(0, n - 1)}...` : str;

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
    });
}

export function test() {
    console.log(this);
}

export function paginate(itemsPerPage = 5, followers = []) {
    const itemPerPage = itemsPerPage;
    // eslint-disable-next-line no-unsafe-optional-chaining
    const numberOfPages = Math.ceil(followers?.length / itemPerPage);
    const newFollowers = Array.from(
        { length: numberOfPages },
        (value, index) => {
            const start = index * itemsPerPage;
            return followers.slice(start, start + itemsPerPage);
        }
    );
    return newFollowers;
}
